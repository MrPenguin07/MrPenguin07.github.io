  import { createWebsiteApp } from "@webiny/serverless-cms-aws";
 
  export default createWebsiteApp({
      pulumiResourceNamePrefix: "wby-"
  domains() {
   return {
    domains: ["my.domain.com"],
    sslSupportMethod: "sni-only",	
      acmCertificateArn:
     "arn:aws:acm:ap-southeast-2:421757994060:certificate/4c5422a2-e0b0-4d4a-931d-5ded6439dcc1"
     };
   }
});