 // Vanta Background
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      color: 0x667eea,
      backgroundColor: 0x764ba2,
      points: 8.0,
      maxDistance: 25.0,
      spacing: 20.0,
      speed: 1.5
    });

    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    addBtn.addEventListener('click', () => {
      const name = document.getElementById('todoName').value.trim();
      const dateInput = document.getElementById('todoDate');
      const date = dateInput.value;
      dateInput.setAttribute('min', new Date().toISOString().split("T")[0]);

      if (!name || !date) return;

      const item = document.createElement('div');
      item.className = 'todo-item';

      const left = document.createElement('div');
      left.className = 'todo-left';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const info = document.createElement('div');
      info.className = 'todo-info';

      const nameSpan = document.createElement('div');
      nameSpan.className = 'todo-text';
      nameSpan.textContent = name;

      const dateSpan = document.createElement('div');
      dateSpan.className = 'todo-date';
      dateSpan.textContent = date;

      checkbox.addEventListener('change', () => {
        info.classList.toggle('completed', checkbox.checked);
      });

      info.appendChild(nameSpan);
      info.appendChild(dateSpan);

      left.appendChild(checkbox);
      left.appendChild(info);

      const delBtn = document.createElement('button');
      delBtn.className = 'deleteBtn';
      delBtn.textContent = 'Delete';
      delBtn.onclick = () => item.remove();

      item.appendChild(left);
      item.appendChild(delBtn);

      todoList.appendChild(item);

      document.getElementById('todoName').value = '';
      document.getElementById('todoDate').value = '';
    });