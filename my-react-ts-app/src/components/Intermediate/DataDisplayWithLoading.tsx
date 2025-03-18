import React from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return ({ isLoading, ...props }: WithLoadingProps & P) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
}

interface DataProps {
  data: string;
}

const DataDisplay: React.FC<DataProps> = ({ data }) => <div>Data: {data}</div>;

const DataDisplayWithLoading = withLoading(DataDisplay);


export default DataDisplayWithLoading;
