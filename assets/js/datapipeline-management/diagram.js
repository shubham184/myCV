function renderMermaidDiagram() {
  console.log("Rendering Mermaid diagram");
  const element = document.querySelector("#architecture-diagram");
  if (element) {
    console.log("Found architecture-diagram element");
    const diagramDefinition = `
graph TD
      A[Data Sources] -->|Ingestion| B(Talend Data Integration)
      B -->|Validation| C{Data Quality Check}
      C -->|Pass| D[Apache Spark Processing]
      C -->|Fail| E[Error Handling]
      D -->|Transformation| F[Spark SQL & DataFrames]
      D -->|Cleaning| G[MLlib & Custom UDFs]
      F --> H[Processed Data]
      G --> H
      H -->|Output| I[Data Warehouse]
      H -->|Output| J[Analytics Platforms]
      K[Monitoring & Logging] --> B
      K --> D
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