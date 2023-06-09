import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ChevronRightIcon,
} from "@clinia-ui/react";

export default {
  title: "Components / Navigation / Breadcrumb",
};

export const Basic = () => (
  <Breadcrumb spacing="4">
    <BreadcrumbItem>
      <BreadcrumbLink>Breadcrumb 1</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Breadcrumb 2</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Breadcrumb 3</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export const WithSeparator = () => (
  <Breadcrumb separator=">">
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Current</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export const WithCustomSeparator = () => (
  <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.300" />}>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="/about">About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
