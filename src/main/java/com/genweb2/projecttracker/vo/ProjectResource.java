package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/16/17.
 */
public class ProjectResource {
    private Project project;
    private Resource resource;
    private String role;
    private Double ratio;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Double getRatio() {
        return ratio;
    }

    public void setRatio(Double ratio) {
        this.ratio = ratio;
    }
}
