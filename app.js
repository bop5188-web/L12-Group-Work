const app = angular.module('storefrontApp', []);

app.controller('ProductController', function($scope) {
    $scope.products = [];

    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            $scope.products = data;
            $scope.$apply();
        })
        .catch(error => console.error(error));

    $scope.addToCart = function(product) {
        const cartItem = {
            productId: product._id,
            productName: product.name,
            quantity: 1,
            price: product.price
        };

        fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => console.error(error));
    };
});

app.controller('CartController', function($scope) {
    $scope.cartItems = [];

    fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
            $scope.cartItems = data;
            $scope.$apply();
        })
        .catch(error => console.error(error));

    $scope.removeFromCart = function(itemId) {
        fetch(`/api/cart/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            $scope.cartItems = $scope.cartItems.filter(item => item._id !== itemId);
            $scope.$apply();
        })
        .catch(error => console.error(error));
    };

    $scope.getTotal = function() {
        return $scope.cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0).toFixed(2);
    };
});

app.controller('CheckoutController', function($scope) {
    $scope.shipping = {};
    $scope.billing = {};
    $scope.shippingSuccess = false;
    $scope.billingSuccess = false;

    $scope.submitShipping = function() {
        fetch('/api/shipping', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify($scope.shipping)
        })
        .then(response => response.json())
        .then(data => {
            $scope.shippingSuccess = true;
            $scope.shipping = {};
            $scope.$apply();
        })
        .catch(error => console.error(error));
    };

    $scope.submitBilling = function() {
        fetch('/api/billing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify($scope.billing)
        })
        .then(response => response.json())
        .then(data => {
            $scope.billingSuccess = true;
            $scope.billing = {};
            $scope.$apply();
        })
        .catch(error => console.error(error));
    };
});

app.controller('ReturnController', function($scope) {
    $scope.returnData = {};
    $scope.returns = [];
    $scope.returnSuccess = false;

    fetch('/api/returns')
        .then(response => response.json())
        .then(data => {
            $scope.returns = data;
            $scope.$apply();
        })
        .catch(error => console.error(error));

    $scope.submitReturn = function() {
        fetch('/api/returns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify($scope.returnData)
        })
        .then(response => response.json())
        .then(data => {
            $scope.returnSuccess = true;
            $scope.returns.push(data);
            $scope.returnData = {};
            $scope.$apply();
        })
        .catch(error => console.error(error));
    };
});

app.controller('SignInController', function($scope) {
    $scope.credentials = {};
    $scope.signInSuccess = false;
    $scope.signInError = false;

    $scope.signIn = function() {
        if ($scope.credentials.email && $scope.credentials.password) {
            $scope.signInSuccess = true;
            $scope.signInError = false;
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            $scope.signInError = 'Please enter email and password';
        }
    };
});

