import React, { useState, useEffect } from "react";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setData("Data Fetched")
    }

    fetchData()

    // Cleanup function
    return () => {
        console.log("Cleanup")
    }
  }, []);

  return <div>{data ? data : "Loading..."}</div>;
};

export default DataFetcher;
