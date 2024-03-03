export const ContactForm = () => {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="ml-2 border" />
      </div>
      <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="ml-2 border" />
      </div>
      <div className="mb-2">
        <label htmlFor="message">Message</label>
        <textarea id="message" className="ml-2 border" />
      </div>
      <button type="submit" className="border bg-red-400 p-2">
        Send
      </button>
    </form>
  );
};
