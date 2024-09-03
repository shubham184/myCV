document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector("#architecture-diagram");
    if (element) {
      const diagramDefinition = `
      graph TD
        A[Data Sources] -->|ETL/ELT| B(Snowflake Data Warehouse)
        B --> C{Snowflake Services}
        C -->|Query| D[Virtual Warehouses]
        C -->|Store| E[Storage]
        C -->|Manage| F[Cloud Services]
        D --> G[BI Tools]
        D --> H[Custom Applications]
        F --> I[Security]
        F --> J[Metadata]
      `;
      element.textContent = diagramDefinition;
      mermaid.init(undefined, element);
    } else {
      console.error("Element with id 'architecture-diagram' not found");
    }
  });