function renderMermaidDiagram() {
  console.log("Rendering Mermaid diagram");
  const element = document.querySelector("#architecture-diagram");
  if (element) {
    console.log("Found architecture-diagram element");
    const diagramDefinition = `
graph TD
    A[IoT Sensors] -->|Data Streams| B[Apache Kafka]
    B -->|Real-time Processing| C[Apache Flink]
    B -->|Batch Processing| D[Apache Spark]
    C -->|Stream Analytics| E[Elasticsearch]
    D -->|ML Model Training| F[ML Models]
    D -->|Batch Analytics| G[Hadoop HDFS]
    E -->|Real-time Querying| H[Qlik Engine]
    G -->|Historical Data| H
    H -->|Embedded Visualizations| I[React + Qlik Frontend]
    F -->|Predictive Analytics| C
    J[External Data Sources] -->|Market Data, Weather, etc.| B
    K[Supply Chain Managers] -->|Interaction| I
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