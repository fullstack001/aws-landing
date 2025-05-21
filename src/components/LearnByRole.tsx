const roleIcons = {
  "Solutions architect": "business-app-colorful.svg",
  Developers: "dev-tools-colorful.svg",
  "DevOps engineer": "sysops-colorful.svg",
  "Cloud operator (SysOps)": "devops-colorful.svg",
  "Decision maker": "solutions-architect-colorful.svg",
};

const LearnByRole = () => (
  <div className="bg-gray-50 py-16 px-4 text-center">
    <h2 className="text-2xl font-bold mb-8">Learn by Cloud Role</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {[
        "Solutions architect",
        "Developers",
        "DevOps engineer",
        "Cloud operator (SysOps)",
        "Decision maker",
      ].map((role) => (
        <div key={role} className="bg-white shadow-md p-6 rounded w-48">
          <img
            src={`image/icons/${roleIcons[role as keyof typeof roleIcons]}`}
            alt={role}
            className="w-16 h-16 mb-4 mx-auto"
          />
          <p>{role}</p>
        </div>
      ))}
    </div>
  </div>
);
export default LearnByRole;
