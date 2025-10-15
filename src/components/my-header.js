const MyHeader = ({ myStyle, children}) => (
  <h1
    className="text-2xl font-bold"
    style={{ color: myStyle }}
  >
    {children}
  </h1>
);
export default MyHeader;

