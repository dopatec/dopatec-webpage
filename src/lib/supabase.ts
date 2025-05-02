import { createClient } from '@supabase/supabase-js';

// Supabase konfiguration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zbrdelrfjugspeqpcfjg.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Skapa Supabase-klienten
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Hjälpfunktioner för vanliga databasoperationer

/**
 * Hämta data från en tabell
 */
export async function fetchData<T>(
  tableName: string,
  options?: {
    columns?: string;
    filters?: Record<string, unknown>;
    limit?: number;
    order?: { column: string; ascending?: boolean };
  }
) {
  let query = supabase.from(tableName).select(options?.columns || '*');

  // Lägg till filter om de finns
  if (options?.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  // Lägg till sortering om det finns
  if (options?.order) {
    query = query.order(options.order.column, {
      ascending: options.order.ascending ?? true,
    });
  }

  // Lägg till begränsning om det finns
  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data as T[];
}

/**
 * Lägg till data i en tabell
 */
export async function insertData<T>(tableName: string, data: Partial<T> | Partial<T>[]) {
  const { data: result, error } = await supabase.from(tableName).insert(data).select();

  if (error) {
    console.error('Error inserting data:', error);
    throw error;
  }

  return result as T[];
}

/**
 * Uppdatera data i en tabell
 */
export async function updateData<T>(
  tableName: string,
  id: string | number,
  data: Partial<T>,
  idColumn: string = 'id'
) {
  const { data: result, error } = await supabase
    .from(tableName)
    .update(data)
    .eq(idColumn, id)
    .select();

  if (error) {
    console.error('Error updating data:', error);
    throw error;
  }

  return result as T[];
}

/**
 * Ta bort data från en tabell
 */
export async function deleteData(tableName: string, id: string | number, idColumn: string = 'id') {
  const { error } = await supabase.from(tableName).delete().eq(idColumn, id);

  if (error) {
    console.error('Error deleting data:', error);
    throw error;
  }

  return true;
}
