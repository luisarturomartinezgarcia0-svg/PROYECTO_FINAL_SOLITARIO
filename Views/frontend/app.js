
async function cargarUsuarios() {
  const tbody = document.getElementById('tabla-usuarios');
  try {
    const res  = await fetch('/api/usuarios');
    const data = await res.json();

    if (!data.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted py-3">No hay usuarios registrados.</td></tr>';
      return;
    }

    tbody.innerHTML = data.map(u => `
      <tr>
        <td>${u.id}</td>
        <td>${u.nombre}</td>
        <td>${u.Email || u.email}</td>
        <td>${u.descripcion || '—'}</td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger py-3">Error al cargar datos.</td></tr>';
    console.error(err);
  }
}


document.getElementById('form-usuario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const body = {
    nombre:      document.getElementById('nombre').value.trim(),
    email:       document.getElementById('email').value.trim(),
    descripcion: document.getElementById('descripcion').value.trim()
  };

  try {
    const res = await fetch('/api/usuarios', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body)
    });

    if (res.ok) {
      e.target.reset();
      cargarUsuarios();
    } else {
      alert('Error al guardar el usuario.');
    }
  } catch (err) {
    console.error(err);
    alert('No se pudo conectar con el servidor.');
  }
});

document.getElementById('btn-cargar').addEventListener('click', cargarUsuarios);


cargarUsuarios();
