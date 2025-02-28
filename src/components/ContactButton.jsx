const ContactButton = ({ name, logo }) => {
  return (
    <button className="flex justify-center text-sm items-center gap-2 bg-white border border-[#222222] p-2 rounded-lg">
      {logo}
      <span>{name}</span>
    </button>
  );
};

export default ContactButton;
