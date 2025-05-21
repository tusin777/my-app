const Notification = ({ messages }) => {
  return (
    <div>
      {messages.length > 0 && <h1>У вас {messages.length} новых сообщений</h1>}
    </div>
  );
};

export default Notification;
