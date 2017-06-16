package com.genweb2.projecttracker.vo;

/**
 * Created by shakil on 6/16/17.
 */
public class Resource {
    private Integer resourceID;
    private String resourceName;
    private Double monthlySalary;
    private Double overHeadRatio;
    private Double billingRate;

    public Integer getResourceID() {
        return resourceID;
    }

    public void setResourceID(Integer resourceID) {
        this.resourceID = resourceID;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public Double getMonthlySalary() {
        return monthlySalary;
    }

    public void setMonthlySalary(Double monthlySalary) {
        this.monthlySalary = monthlySalary;
    }

    public Double getOverHeadRatio() {
        return overHeadRatio;
    }

    public void setOverHeadRatio(Double overHeadRatio) {
        this.overHeadRatio = overHeadRatio;
    }

    public Double getBillingRate() {
        return billingRate;
    }

    public void setBillingRate(Double billingRate) {
        this.billingRate = billingRate;
    }
}
