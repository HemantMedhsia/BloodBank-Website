import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bucket</h3>
          <hr />
          <p>
          Welcome to Blood Bucket, where every drop saves a life. Our platform connects generous donors with hospitals and organizations in need, bridging the gap between compassion and necessity. Join our community dedicated to making a tangible difference in the world. Whether you're here to donate or in search of life-saving blood, we're here to help. With our easy-to-use interface and secure processes, giving the gift of life has never been simpler. Together, we can fill buckets with hope, one donation at a time. Explore our platform and become a part of our mission today. Let's make a lasting impact, one drop at a time, with Blood Bucket          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;