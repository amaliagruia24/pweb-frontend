import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Typography } from "@mui/material";
import { Fragment, memo } from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";

export const HomePage = memo(() => {
  const { formatMessage } = useIntl();

  return <Fragment>
      <Seo title="MobyLab Web App | Home" />
      <WebsiteLayout>
        <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
          <ContentCard title={formatMessage({ id: "globals.welcome" })}>
            <Typography>
                        This is a proof of concept of a medical store web application. In the future, more features will be added such as managing a pharmaceutical
                        shop and it's stock and buying and managing a client's prescription. 
            </Typography>
          </ContentCard>
        </Box>
      </WebsiteLayout>
    </Fragment>
});
