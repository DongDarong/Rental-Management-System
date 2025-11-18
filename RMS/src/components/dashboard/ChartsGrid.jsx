import React from 'react';
// Go up one level (out of 'pages') and into 'components'
 import ChartCard from './ChartCard'; 
import {
    monthlyIncomeConfig,
    newTenantConfig,
    propertyAvailabilityConfig,
    occupancyRateConfig
// Go up one level (out of 'pages') and into 'data'
} from './chartData.js'; 

/**
 * A component to display the grid of four charts.
 * It imports chart configurations and passes them to ChartCard components.
 */
function ChartsGrid() {
    return (
        <div className="main-content flex-1 p-4 md:p-8 lg:p-10">
            <div className="charts-grid grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* 1. Monthly Income Report */}
                <ChartCard
                    title="Monthly Income Trend"
                    chartConfig={monthlyIncomeConfig}
                />

                {/* 2. New Tenant Registrations */}
                <ChartCard
                    title="New Tenant Registrations"
                    chartConfig={newTenantConfig}
                />

                {/* 3. Property Status / Availability */}
                <ChartCard
                    title="Property Availability"
                    chartConfig={propertyAvailabilityConfig}
                    // This prop overrides the default height/width for the doughnut chart
                    containerClassName="w-full sm:w-2/3 mx-auto h-80" 
                />

                {/* 4. Property Performance (Occupancy Rate) */}
                <ChartCard
                    title="Occupancy Rate"
                    chartConfig={occupancyRateConfig}
                />

            </div>
        </div>
    );
}

export default ChartsGrid;