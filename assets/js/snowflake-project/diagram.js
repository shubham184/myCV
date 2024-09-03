function renderMermaidDiagram() {
  console.log("Rendering Mermaid diagram");
  const element = document.querySelector("#architecture-diagram");
  if (element) {
    console.log("Found architecture-diagram element");
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
    console.log("Diagram definition:", diagramDefinition);
    
    try {
      mermaid.mermaidAPI.render('mermaid-svg', diagramDefinition, function(svgCode) {
        element.innerHTML = svgCode;
        console.log("Mermaid diagram rendered successfully");
      });
    } catch (error) {
      console.error("Error rendering Mermaid diagram:", error);
      console.log("Mermaid configuration:", mermaid.mermaidAPI.getConfig());
    }
  } else {
    console.error("Element with id 'architecture-diagram' not found");
  }
}

// This function will be called by the main script after the diagram script is loaded
console.log("Diagram script loaded and renderMermaidDiagram function defined");