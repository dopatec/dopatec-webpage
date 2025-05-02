import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { UserProfile } from '../context/AuthContext';
import { Project } from '../data/projects';
import { fetchProjects } from '../lib/projectService';

// Admin dashboard for managing content and users
export function Admin() {
  const { user, profile, isAdmin, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'users' | 'projects' | 'cms'>('users');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  const [projectFormOpen, setProjectFormOpen] = useState(false);
  const [projectFormData, setProjectFormData] = useState({
    title: '',
    summary: '',
    description: '',
    image: '',
    status: 'upcoming' as 'upcoming' | 'ongoing' | 'completed',
  });

  // Fetch all users
  useEffect(() => {
    // Only fetch users if the user is logged in and admin
    if (!isLoading && user && isAdmin && activeTab === 'users') {
      const fetchUsers = async () => {
        setIsUsersLoading(true);
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) {
            throw error;
          }

          setUsers(data as UserProfile[]);
        } catch (error) {
          console.error('Error fetching users:', error);
        } finally {
          setIsUsersLoading(false);
        }
      };

      fetchUsers();
    }
  }, [activeTab, isAdmin, isLoading, user]);

  // Fetch all projects
  useEffect(() => {
    if (!isLoading && user && isAdmin && activeTab === 'projects') {
      const loadProjects = async () => {
        setIsProjectsLoading(true);
        try {
          const data = await fetchProjects();
          setProjects(data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        } finally {
          setIsProjectsLoading(false);
        }
      };

      loadProjects();
    }
  }, [activeTab, isAdmin, isLoading, user]);

  // Update user role
  const updateUserRole = async (userId: string, newRole: 'admin' | 'user') => {
    try {
      const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', userId);

      if (error) {
        throw error;
      }

      // Update user list
      setUsers(users.map(user => (user.id === userId ? { ...user, role: newRole } : user)));
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  // Handle project form input changes
  const handleProjectInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProjectFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle project form submission
  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Insert new project
      const { error } = await supabase
        .from('projects')
        .insert([
          {
            title: projectFormData.title,
            summary: projectFormData.summary,
            description: projectFormData.description,
            image:
              projectFormData.image || 'https://via.placeholder.com/800x450?text=Project+Image',
            status: projectFormData.status,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      // Reload projects
      const updatedProjects = await fetchProjects();
      setProjects(updatedProjects);

      // Reset form
      setProjectFormData({
        title: '',
        summary: '',
        description: '',
        image: '',
        status: 'upcoming',
      });
      setProjectFormOpen(false);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  // Delete project
  const handleDeleteProject = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      const { error } = await supabase.from('projects').delete().eq('id', projectId);

      if (error) {
        throw error;
      }

      // Update projects list
      setProjects(projects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  // Render users tab
  const renderUsersTab = () => {
    if (isUsersLoading) {
      return <div className="text-center py-8">Loading users...</div>;
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-dark-light">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t border-gray-700">
                <td className="p-3">{user.full_name || 'Not specified'}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      user.role === 'admin'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-gray-700/50 text-gray-300'
                    }`}
                  >
                    {user.role === 'admin' ? 'Admin' : 'User'}
                  </span>
                </td>
                <td className="p-3">
                  {user.id !== profile?.id && (
                    <button
                      onClick={() =>
                        updateUserRole(user.id, user.role === 'admin' ? 'user' : 'admin')
                      }
                      className="px-3 py-1 text-sm rounded bg-dark-lighter hover:bg-dark-light"
                    >
                      {user.role === 'admin' ? 'Make User' : 'Make Admin'}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Render projects tab
  const renderProjectsTab = () => {
    if (isProjectsLoading) {
      return <div className="text-center py-8">Loading projects...</div>;
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Project Management</h2>
          <button
            onClick={() => setProjectFormOpen(!projectFormOpen)}
            className="px-4 py-2 font-mono text-black rounded bg-primary hover:bg-primary-light"
          >
            {projectFormOpen ? 'Cancel' : 'Add New Project'}
          </button>
        </div>

        {projectFormOpen && (
          <div className="mb-8 p-4 bg-dark-lighter rounded-lg">
            <h3 className="text-lg font-bold mb-4">Add New Project</h3>
            <form onSubmit={handleProjectSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-300">Title</label>
                <input
                  type="text"
                  name="title"
                  value={projectFormData.title}
                  onChange={handleProjectInputChange}
                  className="w-full p-2 bg-dark border border-gray-700 rounded text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Summary</label>
                <textarea
                  name="summary"
                  value={projectFormData.summary}
                  onChange={handleProjectInputChange}
                  className="w-full p-2 bg-dark border border-gray-700 rounded text-white"
                  rows={2}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Description</label>
                <textarea
                  name="description"
                  value={projectFormData.description}
                  onChange={handleProjectInputChange}
                  className="w-full p-2 bg-dark border border-gray-700 rounded text-white"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={projectFormData.image}
                  onChange={handleProjectInputChange}
                  className="w-full p-2 bg-dark border border-gray-700 rounded text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Status</label>
                <select
                  name="status"
                  value={projectFormData.status}
                  onChange={handleProjectInputChange}
                  className="w-full p-2 bg-dark border border-gray-700 rounded text-white"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-black rounded hover:bg-primary-light"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        )}

        {projects.length === 0 ? (
          <p className="text-gray-300">No projects found. Add your first project!</p>
        ) : (
          <div className="grid gap-4">
            {projects.map(project => (
              <div
                key={project.id}
                className="p-4 border border-gray-700 rounded-lg bg-dark-lighter"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                    <p className="text-sm text-gray-400 capitalize">{project.status}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="px-3 py-1 text-sm rounded bg-blue-900/30 text-blue-300 hover:bg-blue-900/50"
                      onClick={() => window.open(`/projects/${project.id}`, '_blank')}
                    >
                      View
                    </button>
                    <button
                      className="px-3 py-1 text-sm rounded bg-red-900/30 text-red-300 hover:bg-red-900/50"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-gray-300 line-clamp-2">{project.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render CMS tab (to be implemented later)
  const renderCMSTab = () => {
    return (
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">CMS Management</h2>
        <p className="text-gray-300">
          Here you will be able to manage website content. Functionality will be added later.
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 font-mono text-black rounded bg-primary hover:bg-primary-light">
            Edit Content
          </button>
        </div>
      </div>
    );
  };

  // If user is not logged in or not admin, redirect to home page
  if (!isLoading && (!user || !isAdmin)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-primary">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-700">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 -mb-px font-medium ${
                activeTab === 'users'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 -mb-px font-medium ${
                activeTab === 'projects'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('cms')}
              className={`px-4 py-2 -mb-px font-medium ${
                activeTab === 'cms'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              CMS
            </button>
          </div>
        </div>

        {/* Content for active tab */}
        <div className="p-6 rounded-lg bg-dark-lighter">
          {activeTab === 'users' && renderUsersTab()}
          {activeTab === 'projects' && renderProjectsTab()}
          {activeTab === 'cms' && renderCMSTab()}
        </div>
      </div>
    </div>
  );
}
