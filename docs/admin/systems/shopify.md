---
id: shopify
title: Shopify
label: Shopify
lastUpdated: 2025-08-02
---
--

# 🛠️ Integrator To-Do — Shopify Process Exploration

> _This checklist outlines all Shopify-related processes that need to be explored, mapped, and documented in detail for Admin operations and ISO compliance. Each item below will become its own SOP or checklist._

---

## 📦 Order Management

- [ ] Document how new **Shopify orders** are processed and reviewed  
- [ ] Define process for **printing labels and packing slips**  
- [ ] Clarify how **orders are handed off to Operations** for fulfillment  
- [ ] Outline steps to **mark orders as fulfilled and track shipments**  
- [ ] Document what happens if an order is **partially filled, backordered, or cancelled**

---

## 🛍️ Product Management

- [ ] Document how to **create a new product** in Shopify  
- [ ] Document how to **edit an existing product** (title, price, images, stock)  
- [ ] Specify process for **updating retail and wholesale prices**  
- [ ] Document how product visibility is controlled (Active, Hidden, Draft)

---

## 🧾 Labeling & Shipping

- [ ] Document how to **create a shipping label** in Shopify  
- [ ] Define process for **editing or voiding a label**  
- [ ] Clarify how **packing slips** are handled  
- [ ] Record what **package types** are available and how they’re configured  
- [ ] Explore **shipping zones and rules** (rates, destinations, restrictions)

---

## 💼 Wholesale System

- [ ] Define how a **customer is flagged for wholesale** access (tag, discount, etc.)  
- [ ] Clarify who is **eligible for wholesale** (business type, role, etc.)  
- [ ] Document exact **wholesale terms** (min order, payment, discounts)  
- [ ] Note how **wholesale pricing is implemented** (price overrides, hidden products, etc.)  
- [ ] Clarify how taxes apply to **wholesale vs retail** orders

---

## 📬 Customer Communication

- [ ] Determine how **Shopify inbox or customer messages** are handled  
- [ ] Document process for **logging customer complaints or feedback**  
- [ ] Link complaints to the `customer_complaints.md` log  
- [ ] Create a template for **issue escalation to QA or Innovator**

---

## 🧾 Tax Rules

- [ ] Confirm when and how **sales tax is applied** (e.g., Oklahoma only)  
- [ ] Explore Shopify’s built-in **tax settings and override capabilities**  
- [ ] Document how tax-exempt customers are handled (if applicable)

---

## 🛠️ Admin Interface and Roles

- [ ] Determine which users should have **access to Shopify admin**  
- [ ] Clarify roles and permissions for Admin vs Integrator  
- [ ] Record any **limitations** or required training for Admins

---

## 📊 Reporting & Logs

- [ ] Explore available **sales, order, and product reports**  
- [ ] Identify any useful logs (edits, fulfillment, financial)  
- [ ] Determine how to **back up Shopify data** periodically (manual/export/API)

---

## 🧯 Error Handling & Escalation

- [ ] Define what to do if:
  - Orders fail  
  - Shipping rate errors occur  
  - Labels don’t print  
  - Products go out of stock  
  - Wholesale access fails  
- [ ] List known Shopify issues or limitations  
- [ ] Create an `open_shopify_issues.md` tracker (optional)

---

## 🔄 Integration with ERP / Other Systems

- [ ] Document current integration points between Shopify and ERP (if any)  
- [ ] List any manual handoffs (e.g., inventory, order tracking, pricing)  
- [ ] Define what *should* be automated vs what’s done manually today

---

## 📋 Deliverables (to create)

- [ ] `shopify_orders.md`  
- [ ] `product_management.md`  
- [ ] `shipping_labels.md`  
- [ ] `wholesale_policy.md`  
- [ ] `shopify_tax_settings.md`  
- [ ] `shopify_admin_roles.md`  
- [ ] `customer_complaints.md`  
- [ ] `shopify_daily_checklist.md`

---

> _Use this checklist to guide your exploration, documentation, and system refinement for Shopify. Each item should ultimately become an SOP, internal doc, or policy file for Admin use._