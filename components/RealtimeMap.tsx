'use client';

import { useEffect, useState } from 'react';
import { MapPin, Users, AlertCircle } from 'lucide-react';
import { Report } from '@/lib/types';

interface RealtimeMapProps {
  reports?: Report[];
  onMarkerClick?: (report: Report) => void;
  height?: string;
}

export default function RealtimeMap({ 
  reports = [], 
  onMarkerClick,
  height = '400px' 
}: RealtimeMapProps) {
  const [mapReports, setMapReports] = useState<Report[]>(reports);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  useEffect(() => {
    // Simulate real-time updates
    const fetchReports = async () => {
      try {
        const response = await fetch('/api/laporan');
        const data = await response.json();
        setMapReports(data);
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    };

    fetchReports();
    const interval = setInterval(fetchReports, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);


  const handleMarkerClick = (report: Report) => {
    setSelectedReport(report);
    onMarkerClick?.(report);
  };

  const getDisasterColor = (jenisBencana: string) => {
    const colorMap: Record<string, string> = {
      'Gempa Bumi': '#EF4444',
      'Tsunami': '#3B82F6',
      'Gunung Berapi': '#F97316',
      'Banjir': '#06B6D4',
      'Longsor': '#A855F7',
      'Kekeringan': '#F59E0B',
      'Kebakaran Hutan': '#DC2626',
      'Angin Puting Beliung': '#6B7280',
      'Gelombang Pasang': '#1E40AF',
    };
    return colorMap[jenisBencana] || '#7A1F1F';
  };

  return (
    <div className="relative">
      {/* Map Container - Placeholder for Leaflet */}
      <div 
        className="w-full bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border border-gray-200 relative overflow-hidden"
        style={{ height }}
      >
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gray-100" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, #E5E7EB 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, #E5E7EB 2px, transparent 2px)
                 `,
                 backgroundSize: '50px 50px'
               }} 
          />
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-white rounded-lg shadow-md p-2 space-y-2">
            <button className="p-2 hover:bg-gray-100 rounded">+</button>
            <div className="border-t border-gray-200"></div>
            <button className="p-2 hover:bg-gray-100 rounded">−</button>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 max-w-xs">
          <h4 className="text-sm font-semibold mb-2">Legenda Bencana</h4>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <span className="text-xs">Gempa/Tsunami</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs">Banjir</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-xs">Kebakaran</span>
            </div>
          </div>
        </div>

        {/* Report Markers */}
        <div className="absolute inset-0">
          {mapReports.map((report, index) => {
            const x = 20 + (index * 15) % 80;
            const y = 20 + (index * 20) % 60;
            
            return (
              <div
                key={report.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ 
                  left: `${x}%`, 
                  top: `${y}%`,
                }}
                onClick={() => handleMarkerClick(report)}
              >
                <div 
                  className="relative p-2 rounded-full shadow-lg border-2 border-white animate-pulse-slow"
                  style={{ backgroundColor: getDisasterColor(report.jenisBencana) }}
                >
                  <MapPin className="h-4 w-4 text-white" />
                  {report.reporters > 1 && (
                    <div className="absolute -top-2 -right-2 bg-error text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {report.reporters}
                    </div>
                  )}
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-dark text-white text-xs rounded-lg p-2 whitespace-nowrap">
                    <p className="font-medium">{report.lokasi}</p>
                    <p>{report.jenisBencana}</p>
                    {report.reporters > 1 && (
                      <p className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{report.reporters} pelapor</span>
                      </p>
                    )}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Loading State */}
        {mapReports.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Memuat data laporan...</p>
            </div>
          </div>
        )}
      </div>

      {/* Selected Report Detail */}
      {selectedReport && (
        <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-dark">{selectedReport.lokasi}</h4>
              <p className="text-sm text-gray-600 mb-2">{selectedReport.jenisBencana}</p>
              <p className="text-sm text-gray-700">{selectedReport.deskripsi}</p>
              {selectedReport.reporters > 1 && (
                <div className="flex items-center space-x-1 mt-2">
                  <Users className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-secondary font-medium">
                    {selectedReport.reporters} pelapor
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={() => setSelectedReport(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}