import React, { useEffect, useRef, useState } from 'react';
import './Chatbot.css'; // Make sure to style your component appropriately
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMicrophone, faPaperclip, faTrash } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const endOfMessagesRef = useRef(null);
  const chatbotRef = useRef(null); // Reference for the chatbot container

  // Handle voice recording using SpeechRecognition API
  const handleVoice = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support voice recognition");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  // Handle sending text or file
  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: 'user', text: input }]);

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `You said: ${input}` }
        ]);
      }, 1000);

      setInput('');
    }
  };

  // Handle file attachment
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: `File uploaded: ${file.name}` }
      ]);
    }
  };

  // Reset the chat messages
  const handleReset = () => {
    setMessages([]);
  };

  // Scroll to the latest message
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close chatbot when clicking outside
  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Image to open the chatbot */}
      <img
        src="./Robo.png" // Replace with your image URL
        alt="Open Chatbot"
        className="chatbot-image"
        onClick={() => setIsOpen(true)}
      />

      {/* Show the chatbot when isOpen is true */}
      {isOpen && (
        <div className="chatbot-container" ref={chatbotRef}>
          <div className="chatbot-header">
            <span>Chatbot</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Reset Button */}
              <button onClick={handleReset} className="reset-button" title="Reset Chat" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              {/* Close Icon */}
              <FontAwesomeIcon 
                icon={faTimes} 
                className="close-icon" 
                onClick={() => setIsOpen(false)} 
                style={{ cursor: 'pointer', color: '#f44336', marginLeft: '10px' }} 
              />
            </div>
          </div>
          <div className="chatbot-messages" style={{ overflowY: 'auto', maxHeight: '300px' }}>
            <div>
              {messages.map((msg, index) => (
                <div key={index} className={msg.sender}>
                  {msg.text}
                </div>
              ))}
              <div ref={endOfMessagesRef} />
            </div>
          </div>
          <div className="chatbot-input">
            <FontAwesomeIcon 
              icon={faPaperclip} 
              className="attach-icon" 
              onClick={() => document.getElementById('file-input').click()} 
            />
            <input 
              id="file-input" 
              type="file" 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <FontAwesomeIcon 
              icon={faMicrophone} 
              className={`voice-icon ${listening ? 'listening' : ''}`} 
              onClick={handleVoice} 
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;