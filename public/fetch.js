document.getElementById('get-rate').addEventListener('click', async () => {
     const from = document.getElementById('from-currency').value;
     const to = document.getElementById('to-currency').value;

     // Currecncy validation
     if (from === to) {
          document.getElementById('result').textContent = "Please select different currencies";
          return;
     }

     try {
          // Fetch exchange rate
          const response = await fetch('/api/exchange', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ from, to })
          });
          
          // !response.ok
          const data = await response.json();
          
          // Handle errors
          if (data.error) {
               document.getElementById('result').textContent = `Error: ${data.error}`;
          } else {
               document.getElementById('result').textContent = `1 ${from} = ${data.exchange_rate} ${to}`;
          }
     } catch (error) {
          document.getElementById('result').textContent = 'Failed to fetch exchange rate';
          console.error('Error:', error);
     }
});