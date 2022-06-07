import { Filter } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { serviceContext } from "../Context/ServiceContext";
import MainNavbar from "../MainNavbar/MainNavbar";

const ServiceList = () => {
  const { getService, service } = useContext(serviceContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getService();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  return (
    <>
      <MainNavbar />
      <>
        <Filter type={type} setType={setType} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            mt: 5,
          }}
        >
          {service
            ? service.map((item) => (
                <Grid xs={3.5} mb={7}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NavLink to={`/details/${item.id}`}>
                        <Button size="small" color="primary">
                          Подробнее
                        </Button>
                      </NavLink>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            : null}
        </Box>
      </>
    </>
  );
};

export default ServiceList;
