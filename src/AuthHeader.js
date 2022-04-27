
function AuthHeader({projectName,currentAction}) {
  return (
    <div className="group">
      <p className="header">{currentAction} to {projectName}</p>
      <p className="text caption">Enter your email and password below</p>
    </div>
  );
}

export default AuthHeader;
