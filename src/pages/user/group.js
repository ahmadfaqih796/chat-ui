import WithAuth from "@/lib/session/withAuth";

export const getServerSideProps = WithAuth(async function ({ req, query }) {
  const { name } = req.session.user;
  console.log("ttttttt", name);
  return {
    props: {
      session: {
        ...req.session.user,
        receiver: query.id_receiver || null,
      },
    },
  };
});

const Group = ({ session }) => {
  console.log(session);

  return (
    <div>
      <h1>User List</h1>
      ssss
    </div>
  );
};

Group.layout = "User";
export default Group;
