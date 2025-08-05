// Detox Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation to benefit items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe benefit items and content items for scroll animations
    const animatedElements = document.querySelectorAll('.benefit-item, .content-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Add pulse effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        // Add click tracking (you can replace with actual analytics)
        ctaButton.addEventListener('click', function() {
            console.log('CTA button clicked - Detox purchase initiated');
            
            // Optional: Add a small animation feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Add periodic pulse animation to draw attention
        setInterval(() => {
            ctaButton.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                ctaButton.style.animation = '';
            }, 1000);
        }, 10000); // Pulse every 10 seconds
    }

    // Add hover effects to testimonial
    const testimonial = document.querySelector('.testimonial-content');
    
    if (testimonial) {
        testimonial.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        testimonial.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Mobile menu functionality (if needed in future)
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Add resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        // Adjust animations or layout if needed for different screen sizes
        if (isMobile()) {
            // Mobile-specific adjustments
            animatedElements.forEach(element => {
                element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            });
        } else {
            // Desktop adjustments
            animatedElements.forEach(element => {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        }
    });
});

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 15px 35px rgba(5, 150, 105, 0.3);
        }
        50% {
            box-shadow: 0 20px 45px rgba(5, 150, 105, 0.5);
        }
        100% {
            box-shadow: 0 15px 35px rgba(5, 150, 105, 0.3);
        }
    }
`;
document.head.appendChild(style);