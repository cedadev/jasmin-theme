// Make sure the has-error class gets applied to the parent form-group of any
// invalid controls that have data when the page is loaded
$('.form-control:invalid').each(function() {
    var $self = $(this);
    if( $self.val() ) {
        $self.closest('.form-group').each(function() {
            $(this).addClass('has-error');
        });
    }
});
// Any time a form input changes, check to see if it is valid and apply the has-error
// class to the parent form-group as required
$(document).on('input', '.form-control', function(e) {
    var action = this.validity.valid ? 'removeClass' : 'addClass';
    $(this).closest('.form-group').each(function() { $(this)[action]('has-error'); });
});
