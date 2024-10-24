const Appointment = mongoose.model('Appointment', appointmentSchema);

// API to get list of doctors
app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).send(doctors);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des docteurs');
  }
});

// API to book appointment
app.post('/api/appointments', async (req, res) => {
  const { doctor_id, patient_name, appointment_date } = req.body;

  // Book the appointment
  const appointment = new Appointment({ doctor_id, patient_name, appointment_date });
  await appointment.save();

  res.status(201).send(appointment);++
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
