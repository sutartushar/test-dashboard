import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "./FDMaturityTimeline.css";

const FDMaturityTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    if (container && !container.timelineInitialized) {
      const items = new DataSet([
        {
          id: 1,
          content: "Utkarsh FD 1",
          start: "2024-01-01",
          end: "2024-06-30",
          style: "background-color: #3B39D9; color: white;",
        },
        {
          id: 2,
          content: "Shriram FD Plan 2",
          start: "2024-04-01",
          end: "2024-12-31",
          style: "background-color: #3B39D9; color: white;",
        },
        {
          id: 3,
          content: "Bajaj Finserv FD 1",
          start: "2024-07-01",
          end: "2025-06-30",
          style: "background-color: #3B39D9; color: white;",
        },
        {
          id: 4,
          content: "Mahindra FD Plan 2",
          start: "2024-10-01",
          end: "2026-09-30",
          style: "background-color: #3B39D9; color: white;",
        },
      ]);

      const options = {
        stack: true,
        horizontalScroll: true,
        zoomKey: "ctrlKey",
        maxHeight: 300,
        margin: {
          item: 10,
        },
        orientation: {
          axis: "top",
          item: "bottom",
        },
        editable: false,
        start: "2024-01-01",
        end: "2026-12-31",
        timeAxis: { scale: "month", step: 1 },
      };

      const timeline = new Timeline(container, items, options);

      items.forEach((item) => {
        const bar = timeline.itemsData.get(item.id);
        if (bar) {
          bar.style = item.style; // Apply the style to the bar
          timeline.itemsData.update(bar); // Update the timeline with the new style
        }
      });

      container.timelineInitialized = true;
    }
  }, []);

  return (
    <div className="timeline-container">
      <h3>FD Maturity Timeline</h3>
      <div ref={timelineRef}></div>
    </div>
  );
};

export default FDMaturityTimeline;
