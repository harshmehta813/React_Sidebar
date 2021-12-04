import styled from "styled-components";
const Box = styled.div`
  max-width: 256px;
  border: 1px solid black;
  overflow-y: scroll;
`;
const BoxList = styled.div`
  height: 500px;
`;
const Drawerfirst = styled.div`
  height: 100px;
  border-bottom: 1px solid black;
`;
const Drawer = styled.div`
  border-bottom: 1px solid black;
`;
const DrawerItem = ({ label, icon }) => {
  return (
    <div
      style={{
        margin: "20px 20px",
        gap: "15px",
        paddingTop: "20px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <span class="material-icons-outlined">{icon}</span>
      {label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <Box>
      <BoxList>
        <Drawerfirst />
        <Drawer>
          <DrawerItem label="Inbox" icon="inbox" />
          <DrawerItem label="Starred" icon="grade" />
          <DrawerItem label="Send email" icon="send" />
          <DrawerItem label="Drafts" icon="insert_drive_file" />
        </Drawer>
        <Drawer>
          <DrawerItem label="All mail" icon="mail" />
          <DrawerItem label="Trash" icon="delete" />
          <DrawerItem label="Spam" icon="report" />
        </Drawer>
      </BoxList>
    </Box>
  );
};

export default Sidebar;
