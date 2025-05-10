import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const CodingCostPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Coding Cost</h1>
      <Card title="Your Journey to Coding Conf">
        <p className="mb-2">2025 Starts Here!</p>
        <Button label="Learn More" className="mr-2" />
      </Card>
    </div>
  );
};

export default CodingCostPage;
