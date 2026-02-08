import { Contact } from '../models/Contact.js';
import { sendContactEmail } from '../utils/emailService.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Get client info
    const ipAddress = req.ip || req.socket.remoteAddress;
    const userAgent = req.get('user-agent');

    // Create contact document
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress,
      userAgent,
      status: 'pending',
    });

    // Save to database
    await contact.save();

    // Send email asynchronously (don't block response)
    sendContactEmail({ name, email, subject, message })
      .then(async () => {
        contact.status = 'sent';
        contact.emailSentAt = new Date();
        await contact.save();
        console.log('✅ Contact email sent successfully');
      })
      .catch(async (error) => {
        contact.status = 'failed';
        await contact.save();
        console.error('❌ Failed to send contact email:', error);
      });

    // Return success response immediately
    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    });
  }
};

export const getContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
    });
  }
};
