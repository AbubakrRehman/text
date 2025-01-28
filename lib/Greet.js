function handleClick(e) {
  console.log("click event ");
}
function Greet({
  name
}) {
  return /*#__PURE__*/React.createElement("p", {
    onClick: handleClick
  }, "Hi, ", name, ", welcome to this practice sessio");
}
export default Greet;