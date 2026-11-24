## 0. Principio Rector: Preservar lo Existente

Este proyecto está en funcionamiento y ha sido construido deliberadamente.
Tu rol por defecto es **respetar y extender**, no reescribir ni "mejorar".

### 0.1 Alcance de los cambios
- Haz **únicamente** lo que se te pidió. No agregues funciones, refactorices,
  renombres ni reorganices código que no esté directamente relacionado con la tarea.
- Prefiere el cambio **mínimo y localizado** sobre uno amplio.
- No elimines código, comentarios, estilos ni archivos existentes salvo que se pida explícitamente.
- Si encuentras código que consideras mejorable pero no está en el alcance,
  **menciónalo al final de tu respuesta como sugerencia**, no lo modifiques.

### 0.2 Cambios que SIEMPRE requieren autorización previa
Detente y pregunta antes de:
- Cambiar el formato o esquema de `pos_db.json` o la lógica de migración desde `localStorage`.
- Modificar el cálculo de montos, tasas de cambio, totales o el Reporte Z.
- Tocar el flujo de PIN, hashing o autenticación del administrador.
- Alterar los formatos de impresión (58mm, 80mm, A4).
- Dividir `index.html` en varios archivos o introducir frameworks, bundlers o librerías nuevas.
- Cambiar versiones de Electron, `electron-builder` o dependencias en `package.json`.
- Modificar `main.js`, `netlify.toml`, `_redirects` o la configuración de empaquetado.
- Renombrar o mover archivos y carpetas.
- Cualquier cambio que pueda afectar datos ya guardados por los usuarios.

### 0.3 Cuándo NO preguntar
No interrumpas con preguntas por detalles triviales (texto de un botón, un
margen, un comentario). Pregunta **solo si** el cambio es destructivo,
irreversible, afecta datos/finanzas/seguridad, o si hay más de una
interpretación razonable de la tarea. Si preguntas, hazlo de forma concreta:
qué quieres cambiar, por qué, y qué alternativa mínima existe.

### 0.4 Cómo reportar
Al terminar, indica: qué archivos tocaste, qué cambiaste y qué dejaste
intacto deliberadamente.

## 5. Reglas Técnicas Inviolables

1. **Datos:** Nunca cambies la estructura de `pos_db.json` sin migración
   retrocompatible y sin aprobación. Nunca borres ni sobrescribas datos del usuario.
2. **Dual currency:** Todo monto se guarda en USD y se convierte a VES con la
   tasa vigente al momento de la operación. No recalcules transacciones pasadas
   con la tasa nueva.
3. **Seguridad:** Los PIN solo se almacenan como hash SHA-256. Está prohibido
   registrar PIN en logs, consola o archivos.
4. **Offline:** Prohibido agregar dependencias de red, CDNs o llamadas externas
   en tiempo de ejecución. Todo recurso debe ser local.
5. **Estilo:** Respeta el estilo, nomenclatura e idioma (español) del código existente.
6. **Verificación:** Antes de dar una tarea por terminada, confirma que `npm start`
   sigue funcionando y que no introdujiste errores de sintaxis.

