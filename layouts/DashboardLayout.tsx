import { FC, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Box, Collapse, Grid, Link, List, ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const DashboardLayout: FC<Props> = ({ children, title }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Grid container>
          <Grid
            item
            flexDirection="column"
            sx={{ border: "1px solid red", height: "100vh" }}
            xs={2}
          >
            <Box>
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQE57T41T0ZR8A/company-logo_200_200/0/1587092424852?e=2147483647&v=beta&t=KeWpAEzM4ESlfH0As5SRjMrj04gWb18SRZFEJoCMN7Y"
                alt=""
              />
            </Box>
            <Box>
              <List>
                <ListItemButton>
                  <NextLink href="/" passHref legacyBehavior>
                    <Link>Dashboard</Link>
                  </NextLink>
                </ListItemButton>

                <ListItemButton onClick={handleCollapse}>
                  <NextLink href="/catalog" passHref legacyBehavior>
                    <Link>Catalog</Link>
                  </NextLink>
                  {collapse ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={collapse} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <NextLink href="/product" passHref legacyBehavior>
                        <Link>Product</Link>
                      </NextLink>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Grid>
          <Grid item sx={{ border: "1px solid red" }} xs={10}>
            {children}
          </Grid>
        </Grid>
      </main>
    </>
  );
};
