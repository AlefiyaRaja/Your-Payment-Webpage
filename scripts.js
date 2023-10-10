
        let userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent)) {
            document.querySelectorAll(".android-only").forEach(el => el.style.display = "inline-block");
            document.getElementById("pay-options").style.display = "block";
            document.getElementById("desktop-message").style.display = "none";
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            document.getElementById("pay-options").style.display = "block";
            document.getElementById("desktop-message").style.display = "none";
        }
        document.getElementById("pay-options").style.display = "block";


        function postPayment() {
            let phoneNumber = document.getElementById("phone-number").value;
            let body = {
                amount: 599,
                phone: phoneNumber
            };

            fetch('http://localhost:8080/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        }

        function triggerUPI(upiName) {
            fetch(`http://localhost:8080/${upiName}`);
        }
        function triggerUPI(upiName) {
            if (isDesktop()) {
                displayOverlay();
                return;
            }
            fetch(`http://localhost:8080/${upiName}`);
        }

        // New function to check if the device is a desktop
        function isDesktop() {
            return !(/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent));
        }

        // New function to display the overlay
        function displayOverlay() {
            const overlay = document.getElementById("overlay");
            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.style.display = "none";
            }, 2000); // Overlay will disappear after 2 seconds
        }
    