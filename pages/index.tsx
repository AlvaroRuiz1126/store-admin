import { DashboardLayout } from "@/layouts";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <DashboardLayout title="Products Admin">
      <Typography component="h1" variant="h1">
        Dashboard
      </Typography>
    </DashboardLayout>
  );
};

export default HomePage;
