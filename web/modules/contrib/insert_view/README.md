# Insert View

Insert view filter allows to embed views using tags. The tag syntax is
relatively simple: `[view:name=display=args]`. The parameters are: view name,
view display id, view arguments. For example `[view:tracker=page=1]` says,
embed a view named "tracker", use the "page" display, and supply the argument
"1". The display and args parameters can be omitted. If the display is left
empty, the view's default display is used. Multiple arguments are separated
with slash. The args format is the same as used in the URL
(or view preview screen).

Valid examples:

- `[view:my_view]`
- `[view:my_view=my_display]`
- `[view:my_view=my_display=arg1/arg2/arg3]`
- `[view:my_view==arg1/arg2/arg3]`

For a full description of the module, visit the
[project page](https://www.drupal.org/project/insert_view).

To submit bug reports and feature suggestions, or to track changes visit the
[issue queue](https://www.drupal.org/project/issues/insert_view).


## Table of contents

- Requirements
- Installation
- Configuration
- How to find a display id
- Performance
- Security warning
- Maintainers


## Requirements

This module requires no modules outside of Drupal core.


## Installation

Install as you would normally install a contributed Drupal module. For further
information, see
[Installing Drupal Modules](https://www.drupal.org/docs/extending-drupal/installing-drupal-modules).


## Configuration

Once Insert view is installed, visit the the input formats page at
/admin/settings/filters and click the "configure" link for the input format(s)
for which you wish to enable the Insert view filter. Then simply check the
checkbox for the filter.

### How to find a display id

On the edit page for the view in question, you'll find a list of displays at the
left side of the control area. "Defaults" will be at the top of that list. Hover
your mouse pointer over the name of the display you want to use. A URL will
appear in the status bar of your browser.  This is usually at the bottom of the
window, in the chrome. Everything after #views-tab- is the display ID. For
example in _admin/build/views/edit/tracker?destination=node%2F51#views-tab-page_
the display ID would be "page".


### Performance

To display views correctly, Insert view turns off caching for the input formats
for which it is enabled. That means every node using this input format will not
be cacheable. This can impact site performance. In these cases, it is
recommended to create a special input format for use when inserting views.


### Security warning

This filter is powerful, therefore it should be granted to trusted users only.
If you allow this filter to untrusted users, then you have to make sure that
EVERY VIEW EVERY DISPLAY (default display also!) has correct views access
settings.


## Maintainers

- andrew morton - [drewish](https://www.drupal.org/u/drewish)
- Renato Gonçalves - [RenatoG](https://www.drupal.org/u/renatog)
- Adam Balsam - [balsama](https://www.drupal.org/u/balsama)
- Michael Samuelson - [mlsamuelson](https://www.drupal.org/u/mlsamuelson)
- Paulo Henrique Starling - [paulocs](https://www.drupal.org/u/paulocs)
- Artem Dmitriiev - [a.dmitriiev](https://www.drupal.org/u/admitriiev)
