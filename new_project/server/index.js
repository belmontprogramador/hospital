const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

// his_patients routes
app.get('/patients', async (req, res) => {
  const patients = await prisma.his_patients.findMany();
  res.json(patients);
});

app.get('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const patient = await prisma.his_patients.findUnique({
    where: { pat_id: parseInt(id) },
  });
  res.json(patient);
});

app.post('/patients', async (req, res) => {
  const patient = await prisma.his_patients.create({
    data: req.body,
  });
  res.json(patient);
});

app.put('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const patient = await prisma.his_patients.update({
    where: { pat_id: parseInt(id) },
    data: req.body,
  });
  res.json(patient);
});

app.delete('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const patient = await prisma.his_patients.delete({
    where: { pat_id: parseInt(id) },
  });
  res.json(patient);
});

// his_medical_records routes
app.get('/medical_records', async (req, res) => {
  const records = await prisma.his_medical_records.findMany();
  res.json(records);
});

app.get('/medical_records/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_medical_records.findUnique({
    where: { mdr_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/medical_records', async (req, res) => {
  const record = await prisma.his_medical_records.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/medical_records/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_medical_records.update({
    where: { mdr_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/medical_records/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_medical_records.delete({
    where: { mdr_id: parseInt(id) },
  });
  res.json(record);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


// his_accounts routes
app.get('/accounts', async (req, res) => {
  const records = await prisma.his_accounts.findMany();
  res.json(records);
});

app.get('/accounts/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_accounts.findUnique({
    where: { acc_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/accounts', async (req, res) => {
  const record = await prisma.his_accounts.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/accounts/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_accounts.update({
    where: { acc_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/accounts/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_accounts.delete({
    where: { acc_id: parseInt(id) },
  });
  res.json(record);
});

// his_admin routes
app.get('/admin', async (req, res) => {
  const records = await prisma.his_admin.findMany();
  res.json(records);
});

app.get('/admin/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_admin.findUnique({
    where: { ad_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/admin', async (req, res) => {
  const record = await prisma.his_admin.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/admin/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_admin.update({
    where: { ad_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/admin/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_admin.delete({
    where: { ad_id: parseInt(id) },
  });
  res.json(record);
});

// his_assets routes
app.get('/assets', async (req, res) => {
  const records = await prisma.his_assets.findMany();
  res.json(records);
});

app.get('/assets/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_assets.findUnique({
    where: { asst_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/assets', async (req, res) => {
  const record = await prisma.his_assets.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/assets/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_assets.update({
    where: { asst_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/assets/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_assets.delete({
    where: { asst_id: parseInt(id) },
  });
  res.json(record);
});

// his_docs routes
app.get('/docs', async (req, res) => {
  const records = await prisma.his_docs.findMany();
  res.json(records);
});

app.get('/docs/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_docs.findUnique({
    where: { doc_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/docs', async (req, res) => {
  const record = await prisma.his_docs.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/docs/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_docs.update({
    where: { doc_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/docs/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_docs.delete({
    where: { doc_id: parseInt(id) },
  });
  res.json(record);
});

// his_equipments routes
app.get('/equipments', async (req, res) => {
  const records = await prisma.his_equipments.findMany();
  res.json(records);
});

app.get('/equipments/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_equipments.findUnique({
    where: { eqp_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/equipments', async (req, res) => {
  const record = await prisma.his_equipments.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/equipments/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_equipments.update({
    where: { eqp_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/equipments/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_equipments.delete({
    where: { eqp_id: parseInt(id) },
  });
  res.json(record);
});

// his_laboratory routes
app.get('/laboratory', async (req, res) => {
  const records = await prisma.his_laboratory.findMany();
  res.json(records);
});

app.get('/laboratory/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_laboratory.findUnique({
    where: { lab_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/laboratory', async (req, res) => {
  const record = await prisma.his_laboratory.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/laboratory/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_laboratory.update({
    where: { lab_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/laboratory/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_laboratory.delete({
    where: { lab_id: parseInt(id) },
  });
  res.json(record);
});

// his_medical_records routes
app.get('/medical_records', async (req, res) => {
  const records = await prisma.his_medical_records.findMany();
  res.json(records);
});

app.get('/medical_records/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_medical_records.findUnique({
    where: { mdr_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/medical_records', async (req, res) => {
  const record = await prisma.his_medical_records.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/medical_records/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_medical_records.update({
    where: { mdr_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/medical_records/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_medical_records.delete({
    where: { mdr_id: parseInt(id) },
  });
  res.json(record);
});

// his_patients routes
app.get('/patients', async (req, res) => {
  const records = await prisma.his_patients.findMany();
  res.json(records);
});

app.get('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_patients.findUnique({
    where: { pat_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/patients', async (req, res) => {
  const record = await prisma.his_patients.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_patients.update({
    where: { pat_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_patients.delete({
    where: { pat_id: parseInt(id) },
  });
  res.json(record);
});

// his_patient_transfers routes
app.get('/patient_transfers', async (req, res) => {
  const records = await prisma.his_patient_transfers.findMany();
  res.json(records);
});

app.get('/patient_transfers/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_patient_transfers.findUnique({
    where: { t_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/patient_transfers', async (req, res) => {
  const record = await prisma.his_patient_transfers.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/patient_transfers/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_patient_transfers.update({
    where: { t_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/patient_transfers/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_patient_transfers.delete({
    where: { t_id: parseInt(id) },
  });
  res.json(record);
});

// his_payrolls routes
app.get('/payrolls', async (req, res) => {
  const records = await prisma.his_payrolls.findMany();
  res.json(records);
});

app.get('/payrolls/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_payrolls.findUnique({
    where: { pay_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/payrolls', async (req, res) => {
  const record = await prisma.his_payrolls.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/payrolls/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_payrolls.update({
    where: { pay_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/payrolls/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_payrolls.delete({
    where: { pay_id: parseInt(id) },
  });
  res.json(record);
});

// his_pharmaceuticals routes
app.get('/pharmaceuticals', async (req, res) => {
  const records = await prisma.his_pharmaceuticals.findMany();
  res.json(records);
});

app.get('/pharmaceuticals/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pharmaceuticals.findUnique({
    where: { phar_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/pharmaceuticals', async (req, res) => {
  const record = await prisma.his_pharmaceuticals.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/pharmaceuticals/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pharmaceuticals.update({
    where: { phar_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/pharmaceuticals/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pharmaceuticals.delete({
    where: { phar_id: parseInt(id) },
  });
  res.json(record);
});

// his_pharmaceuticals_categories routes
app.get('/pharmaceuticals_categories', async (req, res) => {
  const records = await prisma.his_pharmaceuticals_categories.findMany();
  res.json(records);
});

app.get('/pharmaceuticals_categories/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pharmaceuticals_categories.findUnique({
    where: { pharm_cat_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/pharmaceuticals_categories', async (req, res) => {
  const record = await prisma.his_pharmaceuticals_categories.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/pharmaceuticals_categories/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pharmaceuticals_categories.update({
    where: { pharm_cat_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/pharmaceuticals_categories/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pharmaceuticals_categories.delete({
    where: { pharm_cat_id: parseInt(id) },
  });
  res.json(record);
});

// his_prescriptions routes
app.get('/prescriptions', async (req, res) => {
  const records = await prisma.his_prescriptions.findMany();
  res.json(records);
});

app.get('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_prescriptions.findUnique({
    where: { pres_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/prescriptions', async (req, res) => {
  const record = await prisma.his_prescriptions.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_prescriptions.update({
    where: { pres_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_prescriptions.delete({
    where: { pres_id: parseInt(id) },
  });
  res.json(record);
});

// his_pwdresets routes
app.get('/pwdresets', async (req, res) => {
  const records = await prisma.his_pwdresets.findMany();
  res.json(records);
});

app.get('/pwdresets/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pwdresets.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(record);
});

app.post('/pwdresets', async (req, res) => {
  const record = await prisma.his_pwdresets.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/pwdresets/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pwdresets.update({
    where: { id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/pwdresets/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_pwdresets.delete({
    where: { id: parseInt(id) },
  });
  res.json(record);
});

// his_surgery routes
app.get('/surgery', async (req, res) => {
  const records = await prisma.his_surgery.findMany();
  res.json(records);
});

app.get('/surgery/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_surgery.findUnique({
    where: { s_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/surgery', async (req, res) => {
  const record = await prisma.his_surgery.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/surgery/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_surgery.update({
    where: { s_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/surgery/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_surgery.delete({
    where: { s_id: parseInt(id) },
  });
  res.json(record);
});

// his_vendor routes
app.get('/vendor', async (req, res) => {
  const records = await prisma.his_vendor.findMany();
  res.json(records);
});

app.get('/vendor/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_vendor.findUnique({
    where: { v_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/vendor', async (req, res) => {
  const record = await prisma.his_vendor.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/vendor/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_vendor.update({
    where: { v_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/vendor/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_vendor.delete({
    where: { v_id: parseInt(id) },
  });
  res.json(record);
});

// his_vitals routes
app.get('/vitals', async (req, res) => {
  const records = await prisma.his_vitals.findMany();
  res.json(records);
});

app.get('/vitals/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_vitals.findUnique({
    where: { vit_id: parseInt(id) },
  });
  res.json(record);
});

app.post('/vitals', async (req, res) => {
  const record = await prisma.his_vitals.create({
    data: req.body,
  });
  res.json(record);
});

app.put('/vitals/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_vitals.update({
    where: { vit_id: parseInt(id) },
    data: req.body,
  });
  res.json(record);
});

app.delete('/vitals/:id', async (req, res) => {
  const { id } = req.params;
  const record = await prisma.his_vitals.delete({
    where: { vit_id:
       parseInt(id) },
  });
  res.json(record);
});

 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});