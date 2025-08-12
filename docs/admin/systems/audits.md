---
id: audits
title: Audits
label: Audits
lastUpdated: 2025-08-02
---

# 📋 Integrator To-Do — Auditing System Setup

> _This checklist guides development of the internal auditing system for ISO 9001 compliance. QA will conduct audits; Integrator builds and supports the infrastructure._

---

## 🏗️ System Design

- [ ] Choose audit format: checklist, forms, or task templates  
- [ ] Decide storage method (ERP module, spreadsheet, Markdown file, or combo)  
- [ ] Create master audit log to track audit date, clause, department, findings, actions  
- [ ] Determine how departments will submit corrective actions (linked logs, ERP fields)  
- [ ] Define folder or tag structure for storing supporting evidence

---

## 📅 Scheduling & Frequency

- [ ] Define minimum audit schedule (quarterly or per process) per clause 9.2.2  
- [ ] Coordinate with QA to assign audit intervals by clause/department  
- [ ] Build or maintain audit calendar (Google Calendar, ERP, Notion, etc.)  
- [ ] Link audit prep deadlines to `review_cycle` system  

---

## ✅ Audit Execution Tools

- [ ] Create or format **internal audit checklist template**  
- [ ] Build clause-by-clause audit questions (align with your actual QMS)  
- [ ] Include tracking of:  
  - Audit scope  
  - Auditor name  
  - Clauses reviewed  
  - Department being audited  
  - Nonconformities found  
  - Corrective action status  
- [ ] Test a pilot audit log with QA

---

## 🧾 Document Control

- [ ] Set up folder structure: `/audits/YYYY/QX/department/`  
- [ ] Determine if audits will be logged as Markdown, form PDF, or in ERP  
- [ ] Track revisions to checklists or audit forms via `document_control` system  
- [ ] Implement naming convention for audits and findings

---

## 🔁 Issue Logging & Corrective Actions

- [ ] Create or link `nonconformance_log.md` or ERP equivalent  
- [ ] Define how findings are categorized (minor, major, OFI, etc.)  
- [ ] Make it easy for QA to log issues and track status of resolutions  
- [ ] Tie corrective action records to 10.2 compliance

---

## 📊 Reporting & Review

- [ ] Build audit summary report template for management review (clause 9.3)  
- [ ] Ensure ability to filter or summarize:
  - Findings by clause  
  - Findings by department  
  - Overdue corrective actions  
- [ ] Export reports for quarterly reviews (`quarterly_review_tracking`)

---

## 🔐 Permissions & Access

- [ ] Ensure QA has access to full audit logs  
- [ ] Admin can assist with prep or filing, but **cannot edit results**  
- [ ] Determine if findings or summaries are visible to departments

---

## 🔧 Maintenance & Support

- [ ] Review system quarterly for usability, file bloat, or broken links  
- [ ] Add automation/reminders for upcoming audits if possible  
- [ ] Document training for QA on how to use the system  
- [ ] Link all system files into central `audit_system.md` in `/systems/qa/` or `/systems/integrator/`

---

## 📋 Deliverables To Create

- [ ] `audit_checklist_template.md`  
- [ ] `audit_log_template.md`  
- [ ] `nonconformance_log.md`  
- [ ] `audit_finding_categories.md`  
- [ ] `quarterly_audit_summary.md`  
- [ ] `/audits/YYYY/QX/` folder structure  
- [ ] System overview in `audit_system.md`

---

> _This auditing system must meet clause 9.2 and support continual improvement while remaining lean and easy to maintain._
