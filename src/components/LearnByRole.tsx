const roleIcons = [
  "business-app-colorful.svg",
  "dev-tools-colorful.svg",
  "sysops-colorful.svg",
  "devops-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
  "solutions-architect-colorful.svg",
];

const LearnByRole = () => (
  <div
    className="bg-gray-50 py-16 px-4 text-center"
    style={{
      background:
        "linear-gradient(to right, #ff0080, #7928ca, #0070f3, #001220)",
    }}
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-8">
      Learn by Occupational Role
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
        "Mid-Level Package (2-5 products, unlimited edits and 3 team members)",
        "Executive-Level Package (15 products, unlimited edits and 5 team members)",
      ].map((role, index) => (
        <div
          key={role}
          className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
        >
          <img
            src={`image/icons/${roleIcons[index]}`}
            alt={role}
            className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
          />
          <p className="text-sm sm:text-base font-medium">{role}</p>
        </div>
      ))}
    </div>
  </div>
);
export default LearnByRole;
