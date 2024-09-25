import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="fixed top-3/4 left-10 transform -translate-y-1/2">
      <ul className="space-y-3">
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#333] rounded-full p-2">
              <FaGithub className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#0077b5] rounded-full p-2">
              <FaLinkedin className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] rounded-full p-2">
              <FaInstagram className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#d93025] rounded-full p-2">
              <FaEnvelope className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#25d366] rounded-full p-2">
              <FaWhatsapp className="text-white text-xl" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
