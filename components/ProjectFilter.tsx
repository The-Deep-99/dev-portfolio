import React, { useState, useMemo } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

interface Project {
  name: string;
  desc: string;
  github?: string;
  link?: string;
  tags?: string[];
}

interface ProjectFilterProps {
  projects: Project[];
  onFilteredProjects: (filteredProjects: Project[]) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects, onFilteredProjects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      if (project.tags) {
        project.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [projects]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    
    return projects.filter(project => 
      project.tags && project.tags.includes(activeFilter)
    );
  }, [activeFilter, projects]);

  // Update parent component when filtered projects change
  React.useEffect(() => {
    onFilteredProjects(filteredProjects);
  }, [filteredProjects, onFilteredProjects]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="text-center mb-4">
      <ButtonGroup className="flex-wrap justify-content-center">
        <Button
          color={activeFilter === 'all' ? 'primary' : 'secondary'}
          onClick={() => handleFilterChange('all')}
          className="m-1"
        >
          All Projects
        </Button>
        
        {allTags.map(tag => (
          <Button
            key={tag}
            color={activeFilter === tag ? 'primary' : 'secondary'}
            onClick={() => handleFilterChange(tag)}
            className="m-1"
          >
            {tag}
          </Button>
        ))}
      </ButtonGroup>
      
      <div className="mt-3">
        <small className="text-muted">
          Showing {filteredProjects.length} of {projects.length} projects
        </small>
      </div>
    </div>
  );
};

export default ProjectFilter;
