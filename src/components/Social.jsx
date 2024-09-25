import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="fixed top-3/4 left-10 transform -translate-y-1/2">
      <ul className="space-y-3">
        <li>
          <a href="https://github.com/htmcharles" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#333] rounded-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <FaGithub className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hatuma-charles-ba093b302/" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#0077b5] rounded-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <FaLinkedin className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/h.charles_1" target="_blank" rel="noopener noreferrer">
            <div className="bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] rounded-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <FaInstagram className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:hatumcharles1@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#d93025] rounded-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <FaEnvelope className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://wa.me/+250793234963" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#25d366] rounded-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <FaWhatsapp className="text-white text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/htm_charles" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#00acee] rounded-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <FaTwitter className="text-white text-xl" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
