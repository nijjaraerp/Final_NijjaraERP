{
  "lighthouseVersion": "12.8.2",
  "finalDisplayedUrl": "https://script.google.com/macros/s/AKfycbxekGvwbNJNeg0maEyZHnP3iC6JUc9p97jvsAEyDbjrhdsJQKbGCfzS1OH6pbQPq8cm/exec",
  "fetchTime": "2025-11-10T06:16:42.560Z",
  "gatherMode": "snapshot",
  "runWarnings": [],
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
  "environment": {
    "hostUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    "benchmarkIndex": 3048.5,
    "credits": {
      "axe-core": "4.10.3"
    }
  },
  "audits": {
    "viewport": {
      "id": "viewport",
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "warnings": [],
      "metricSavings": {
        "INP": 0
      },
      "details": {
        "type": "debugdata",
        "viewportContent": "width=device-width, initial-scale=1"
      },
      "guidanceLevel": 3
    },
    "image-aspect-ratio": {
      "id": "image-aspect-ratio",
      "title": "Displays images with correct aspect ratio",
      "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "displayedAspectRatio",
            "valueType": "text",
            "label": "Aspect Ratio (Displayed)"
          },
          {
            "key": "actualAspectRatio",
            "valueType": "text",
            "label": "Aspect Ratio (Actual)"
          }
        ],
        "items": []
      }
    },
    "image-size-responsive": {
      "id": "image-size-responsive",
      "title": "Serves images with appropriate resolution",
      "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "displayedSize",
            "valueType": "text",
            "label": "Displayed size"
          },
          {
            "key": "actualSize",
            "valueType": "text",
            "label": "Actual size"
          },
          {
            "key": "expectedSize",
            "valueType": "text",
            "label": "Expected size"
          }
        ],
        "items": []
      }
    },
    "unsized-images": {
      "id": "unsized-images",
      "title": "Image elements have explicit `width` and `height`",
      "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "metricSavings": {
        "CLS": 0
      },
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          }
        ],
        "items": []
      },
      "guidanceLevel": 4
    },
    "accesskeys": {
      "id": "accesskeys",
      "title": "`[accesskey]` values are unique",
      "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.10/accesskeys).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
      "title": "`[aria-*]` attributes match their roles",
      "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-allowed-role": {
      "id": "aria-allowed-role",
      "title": "Uses ARIA roles only on compatible elements",
      "description": "Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-command-name": {
      "id": "aria-command-name",
      "title": "`button`, `link`, and `menuitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-command-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-conditional-attr": {
      "id": "aria-conditional-attr",
      "title": "ARIA attributes are used as specified for the element's role",
      "description": "Some ARIA attributes are only allowed on an element under certain conditions. [Learn more about conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-deprecated-role": {
      "id": "aria-deprecated-role",
      "title": "Deprecated ARIA roles were not used",
      "description": "Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-dialog-name": {
      "id": "aria-dialog-name",
      "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
      "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-hidden-body": {
      "id": "aria-hidden-body",
      "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
      "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-hidden-focus": {
      "id": "aria-hidden-focus",
      "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
      "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-input-field-name": {
      "id": "aria-input-field-name",
      "title": "ARIA input fields have accessible names",
      "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-meter-name": {
      "id": "aria-meter-name",
      "title": "ARIA `meter` elements have accessible names",
      "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.10/aria-meter-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-progressbar-name": {
      "id": "aria-progressbar-name",
      "title": "ARIA `progressbar` elements have accessible names",
      "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-prohibited-attr": {
      "id": "aria-prohibited-attr",
      "title": "Elements use only permitted ARIA attributes",
      "description": "Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
      "title": "`[role]`s have all required `[aria-*]` attributes",
      "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.10/aria-required-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-required-children": {
      "id": "aria-required-children",
      "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
      "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.10/aria-required-children).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
      "title": "`[role]`s are contained by their required parent element",
      "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.10/aria-required-parent).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-roles": {
      "id": "aria-roles",
      "title": "`[role]` values are valid",
      "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-roles).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-text": {
      "id": "aria-text",
      "title": "Elements with the `role=text` attribute do not have focusable descendents.",
      "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.10/aria-text).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-toggle-field-name": {
      "id": "aria-toggle-field-name",
      "title": "ARIA toggle fields have accessible names",
      "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-tooltip-name": {
      "id": "aria-tooltip-name",
      "title": "ARIA `tooltip` elements have accessible names",
      "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-treeitem-name": {
      "id": "aria-treeitem-name",
      "title": "ARIA `treeitem` elements have accessible names",
      "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
      "title": "`[aria-*]` attributes have valid values",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
      "title": "`[aria-*]` attributes are valid and not misspelled",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "button-name": {
      "id": "button-name",
      "title": "Buttons have an accessible name",
      "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.10/button-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "bypass": {
      "id": "bypass",
      "title": "The page contains a heading, skip link, or landmark region",
      "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.10/bypass).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "1-0-HTML",
              "path": "1,HTML",
              "selector": "html",
              "boundingRect": {
                "top": 0,
                "bottom": 695,
                "left": 0,
                "right": 471,
                "width": 471,
                "height": 695
              },
              "snippet": "<html>",
              "nodeLabel": "html",
              "explanation": "Fix any of the following:\n  No valid skip link found\n  Page does not have a heading\n  Page does not have a landmark region"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.keyboard",
            "wcag2a",
            "wcag241",
            "section508",
            "section508.22.o",
            "TTv5",
            "TT9.a",
            "EN-301-549",
            "EN-9.2.4.1"
          ]
        }
      }
    },
    "color-contrast": {
      "id": "color-contrast",
      "title": "Background and foreground colors have a sufficient contrast ratio",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "definition-list": {
      "id": "definition-list",
      "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
      "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/definition-list).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
      "title": "Definition list items are wrapped in `<dl>` elements",
      "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/dlitem).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "document-title": {
      "id": "document-title",
      "title": "Document has a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.10/document-title).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "duplicate-id-aria": {
      "id": "duplicate-id-aria",
      "title": "ARIA IDs are unique",
      "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "empty-heading": {
      "id": "empty-heading",
      "title": "All heading elements contain content.",
      "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.10/empty-heading).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "form-field-multiple-labels": {
      "id": "form-field-multiple-labels",
      "title": "No form fields have multiple labels",
      "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "frame-title": {
      "id": "frame-title",
      "title": "`<frame>` or `<iframe>` elements have a title",
      "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.10/frame-title).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "heading-order": {
      "id": "heading-order",
      "title": "Heading elements appear in a sequentially-descending order",
      "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.10/heading-order).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element does not have a `[lang]` attribute",
      "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-has-lang).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "1-0-HTML",
              "path": "1,HTML",
              "selector": "html",
              "boundingRect": {
                "top": 0,
                "bottom": 695,
                "left": 0,
                "right": 471,
                "width": 471,
                "height": 695
              },
              "snippet": "<html>",
              "nodeLabel": "html",
              "explanation": "Fix any of the following:\n  The <html> element does not have a lang attribute"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.language",
            "wcag2a",
            "wcag311",
            "TTv5",
            "TT11.a",
            "EN-301-549",
            "EN-9.3.1.1",
            "ACT"
          ]
        }
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-lang-valid).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "html-xml-lang-mismatch": {
      "id": "html-xml-lang-mismatch",
      "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
      "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "identical-links-same-purpose": {
      "id": "identical-links-same-purpose",
      "title": "Identical links have the same purpose.",
      "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.10/identical-links-same-purpose).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "image-redundant-alt": {
      "id": "image-redundant-alt",
      "title": "Image elements do not have `[alt]` attributes that are redundant text.",
      "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "input-button-name": {
      "id": "input-button-name",
      "title": "Input buttons have discernible text.",
      "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.10/input-button-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "input-image-alt": {
      "id": "input-image-alt",
      "title": "`<input type=\"image\">` elements have `[alt]` text",
      "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.10/input-image-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label-content-name-mismatch": {
      "id": "label-content-name-mismatch",
      "title": "Elements with visible text labels have matching accessible names.",
      "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label": {
      "id": "label",
      "title": "Form elements have associated labels",
      "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.10/label).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "landmark-one-main": {
      "id": "landmark-one-main",
      "title": "Document has a main landmark.",
      "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.10/landmark-one-main).",
      "score": 1,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "1-0-HTML",
              "path": "1,HTML",
              "selector": "html",
              "boundingRect": {
                "top": 0,
                "bottom": 695,
                "left": 0,
                "right": 471,
                "width": 471,
                "height": 695
              },
              "snippet": "<html>",
              "nodeLabel": "html",
              "explanation": "Fix all of the following:\n  Document does not have a main landmark"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "moderate",
          "tags": [
            "cat.semantics",
            "best-practice"
          ]
        }
      }
    },
    "link-name": {
      "id": "link-name",
      "title": "Links have a discernible name",
      "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.10/link-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "link-in-text-block": {
      "id": "link-in-text-block",
      "title": "Links are distinguishable without relying on color.",
      "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.10/link-in-text-block).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "list": {
      "id": "list",
      "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
      "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.10/list).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.10/listitem).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "meta-refresh": {
      "id": "meta-refresh",
      "title": "The document does not use `<meta http-equiv=\"refresh\">`",
      "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-refresh).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "meta-viewport": {
      "id": "meta-viewport",
      "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
      "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-viewport).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "object-alt": {
      "id": "object-alt",
      "title": "`<object>` elements have alternate text",
      "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.10/object-alt).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "select-name": {
      "id": "select-name",
      "title": "Select elements have associated label elements.",
      "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.10/select-name).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "skip-link": {
      "id": "skip-link",
      "title": "Skip links are focusable.",
      "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.10/skip-link).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "tabindex": {
      "id": "tabindex",
      "title": "No element has a `[tabindex]` value greater than 0",
      "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.10/tabindex).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "table-duplicate-name": {
      "id": "table-duplicate-name",
      "title": "Tables have different content in the summary attribute and `<caption>`.",
      "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "table-fake-caption": {
      "id": "table-fake-caption",
      "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.10/table-fake-caption).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "target-size": {
      "id": "target-size",
      "title": "Touch targets have sufficient size and spacing.",
      "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.10/target-size).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "td-has-header": {
      "id": "td-has-header",
      "title": "`<td>` elements in a large `<table>` have one or more table headers.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/td-has-header).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
      "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.10/td-headers-attr).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "valueType": "node"
            },
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
      "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
      "title": "`[lang]` attributes have a valid value",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/valid-lang).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.10/video-caption).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
      "title": "Custom controls have associated labels",
      "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
      "title": "Custom controls have ARIA roles",
      "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focus-traps": {
      "id": "focus-traps",
      "title": "User focus is not accidentally trapped in a region",
      "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focusable-controls": {
      "id": "focusable-controls",
      "title": "Interactive controls are keyboard focusable",
      "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
      "title": "Interactive elements indicate their purpose and state",
      "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
      "title": "The page has a logical tab order",
      "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "managed-focus": {
      "id": "managed-focus",
      "title": "The user's focus is directed to new content added to the page",
      "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
      "title": "Offscreen content is hidden from assistive technology",
      "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "use-landmarks": {
      "id": "use-landmarks",
      "title": "HTML5 landmark elements are used to improve navigation",
      "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
      "title": "Visual order on the page follows DOM order",
      "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "uses-responsive-images-snapshot": {
      "id": "uses-responsive-images-snapshot",
      "title": "Images were appropriate for their displayed size",
      "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "displayedDimensions",
            "valueType": "text",
            "label": "Displayed dimensions"
          },
          {
            "key": "actualDimensions",
            "valueType": "text",
            "label": "Actual dimensions"
          }
        ],
        "items": []
      },
      "guidanceLevel": 2
    },
    "doctype": {
      "id": "doctype",
      "title": "Page has the HTML doctype",
      "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "dom-size": {
      "id": "dom-size",
      "title": "Avoids an excessive DOM size",
      "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
      "score": 1,
      "scoreDisplayMode": "metricSavings",
      "numericValue": 21,
      "numericUnit": "element",
      "displayValue": "21 elements",
      "metricSavings": {},
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "statistic",
            "valueType": "text",
            "label": "Statistic"
          },
          {
            "key": "node",
            "valueType": "node",
            "label": "Element"
          },
          {
            "key": "value",
            "valueType": "numeric",
            "label": "Value"
          }
        ],
        "items": [
          {
            "statistic": "Total DOM Elements",
            "value": {
              "type": "numeric",
              "granularity": 1,
              "value": 21
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "1-3-path",
              "path": "1,HTML,1,BODY,0,TABLE,0,TBODY,0,TR,0,TD,0,DIV,0,DIV,0,DIV,0,SPAN,0,svg,0,path",
              "selector": "div.warning-banner-header > span.warning-banner-icon > svg > path",
              "boundingRect": {
                "top": 12,
                "bottom": 32,
                "left": 22,
                "right": 42,
                "width": 20,
                "height": 20
              },
              "snippet": "<path d=\"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-…\">",
              "nodeLabel": "div.warning-banner-header > span.warning-banner-icon > svg > path"
            },
            "statistic": "Maximum DOM Depth",
            "value": {
              "type": "numeric",
              "granularity": 1,
              "value": 11
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "1-4-BODY",
              "path": "1,HTML,1,BODY",
              "selector": "body",
              "boundingRect": {
                "top": 0,
                "bottom": 695,
                "left": 0,
                "right": 471,
                "width": 471,
                "height": 695
              },
              "snippet": "<body>",
              "nodeLabel": "body"
            },
            "statistic": "Maximum Child Elements",
            "value": {
              "type": "numeric",
              "granularity": 1,
              "value": 2
            }
          }
        ]
      },
      "guidanceLevel": 1
    },
    "js-libraries": {
      "id": "js-libraries",
      "title": "Detected JavaScript libraries",
      "description": "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "paste-preventing-inputs": {
      "id": "paste-preventing-inputs",
      "title": "Allows users to paste into input fields",
      "description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": "Failing Elements"
          }
        ],
        "items": []
      }
    },
    "meta-description": {
      "id": "meta-description",
      "title": "Document does not have a meta description",
      "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "font-size": {
      "id": "font-size",
      "title": "Document uses legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "link-text": {
      "id": "link-text",
      "title": "Links do not have descriptive text",
      "description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "1 link found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "href",
            "valueType": "url",
            "label": "Link destination"
          },
          {
            "key": "text",
            "valueType": "text",
            "label": "Link Text"
          }
        ],
        "items": [
          {
            "href": "https://developers.google.com/apps-script",
            "text": "Learn more"
          }
        ]
      }
    },
    "crawlable-anchors": {
      "id": "crawlable-anchors",
      "title": "Links are crawlable",
      "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": "Uncrawlable Link"
          }
        ],
        "items": []
      }
    },
    "robots-txt": {
      "id": "robots-txt",
      "title": "robots.txt is valid",
      "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "index",
            "valueType": "text",
            "label": "Line #"
          },
          {
            "key": "line",
            "valueType": "code",
            "label": "Content"
          },
          {
            "key": "message",
            "valueType": "code",
            "label": "Error"
          }
        ],
        "items": []
      }
    },
    "structured-data": {
      "id": "structured-data",
      "title": "Structured data is valid",
      "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
      "score": null,
      "scoreDisplayMode": "manual"
    }
  },
  "configSettings": {
    "output": "json",
    "maxWaitForFcp": 30000,
    "maxWaitForLoad": 45000,
    "pauseAfterFcpMs": 1000,
    "pauseAfterLoadMs": 1000,
    "networkQuietThresholdMs": 1000,
    "cpuQuietThresholdMs": 1000,
    "formFactor": "desktop",
    "throttling": {
      "rttMs": 40,
      "throughputKbps": 10240,
      "requestLatencyMs": 0,
      "downloadThroughputKbps": 0,
      "uploadThroughputKbps": 0,
      "cpuSlowdownMultiplier": 1
    },
    "throttlingMethod": "simulate",
    "screenEmulation": {
      "mobile": true,
      "width": 412,
      "height": 823,
      "deviceScaleFactor": 1.75,
      "disabled": true
    },
    "emulatedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "auditMode": false,
    "gatherMode": false,
    "clearStorageTypes": [
      "file_systems",
      "shader_cache",
      "service_workers",
      "cache_storage"
    ],
    "disableStorageReset": false,
    "debugNavigation": false,
    "channel": "devtools",
    "usePassiveGathering": false,
    "disableFullPageScreenshot": false,
    "skipAboutBlank": false,
    "blankPage": "about:blank",
    "ignoreStatusCode": true,
    "locale": "en-US",
    "blockedUrlPatterns": null,
    "additionalTraceCategories": "",
    "extraHeaders": null,
    "precomputedLanternData": null,
    "onlyAudits": null,
    "onlyCategories": [
      "performance",
      "accessibility",
      "best-practices",
      "seo"
    ],
    "skipAudits": null
  },
  "categories": {
    "performance": {
      "title": "Performance",
      "supportedModes": [
        "navigation",
        "timespan",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "dom-size",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "unsized-images",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "viewport",
          "weight": 0,
          "group": "diagnostics"
        },
        {
          "id": "uses-responsive-images-snapshot",
          "weight": 0,
          "group": "diagnostics"
        }
      ],
      "id": "performance",
      "score": 0
    },
    "accessibility": {
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review).",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-allowed-role",
          "weight": 1,
          "group": "a11y-aria"
        },
        {
          "id": "aria-command-name",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-conditional-attr",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-deprecated-role",
          "weight": 1,
          "group": "a11y-aria"
        },
        {
          "id": "aria-dialog-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-body",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-focus",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-input-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-meter-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-progressbar-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-prohibited-attr",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": 7,
          "group": "a11y-aria"
        },
        {
          "id": "aria-text",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-toggle-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-tooltip-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-treeitem-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "button-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": 7,
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id-aria",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "form-field-multiple-labels",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "frame-title",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "heading-order",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "html-has-lang",
          "weight": 7,
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "html-xml-lang-mismatch",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "image-redundant-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-button-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "link-in-text-block",
          "weight": 0,
          "group": "a11y-color-contrast"
        },
        {
          "id": "link-name",
          "weight": 7,
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 10,
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "select-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "skip-link",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": 7,
          "group": "a11y-navigation"
        },
        {
          "id": "table-duplicate-name",
          "weight": 1,
          "group": "a11y-tables-lists"
        },
        {
          "id": "target-size",
          "weight": 7,
          "group": "a11y-best-practices"
        },
        {
          "id": "td-headers-attr",
          "weight": 7,
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "focusable-controls",
          "weight": 0
        },
        {
          "id": "interactive-element-affordance",
          "weight": 0
        },
        {
          "id": "logical-tab-order",
          "weight": 0
        },
        {
          "id": "visual-order-follows-dom",
          "weight": 0
        },
        {
          "id": "focus-traps",
          "weight": 0
        },
        {
          "id": "managed-focus",
          "weight": 0
        },
        {
          "id": "use-landmarks",
          "weight": 0
        },
        {
          "id": "offscreen-content-hidden",
          "weight": 0
        },
        {
          "id": "custom-controls-labels",
          "weight": 0
        },
        {
          "id": "custom-controls-roles",
          "weight": 0
        },
        {
          "id": "empty-heading",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "identical-links-same-purpose",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "landmark-one-main",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "label-content-name-mismatch",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "table-fake-caption",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "td-has-header",
          "weight": 0,
          "group": "hidden"
        }
      ],
      "id": "accessibility",
      "score": 0.95
    },
    "best-practices": {
      "title": "Best Practices",
      "supportedModes": [
        "navigation",
        "timespan",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "paste-preventing-inputs",
          "weight": 3,
          "group": "best-practices-ux"
        },
        {
          "id": "image-aspect-ratio",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "image-size-responsive",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "viewport",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "font-size",
          "weight": 0,
          "group": "best-practices-ux"
        },
        {
          "id": "doctype",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "js-libraries",
          "weight": 0,
          "group": "best-practices-general"
        }
      ],
      "id": "best-practices",
      "score": 1
    },
    "seo": {
      "title": "SEO",
      "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).",
      "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "document-title",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "meta-description",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "link-text",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "crawlable-anchors",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "robots-txt",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "image-alt",
          "weight": 0,
          "group": "seo-content"
        },
        {
          "id": "structured-data",
          "weight": 0
        }
      ],
      "id": "seo",
      "score": 0.6
    }
  },
  "categoryGroups": {
    "metrics": {
      "title": "Metrics"
    },
    "insights": {
      "title": "Insights",
      "description": "These insights are also available in the Chrome DevTools Performance Panel - [record a trace](https://developer.chrome.com/docs/devtools/performance/reference) to view more detailed information."
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
    },
    "a11y-best-practices": {
      "title": "Best practices",
      "description": "These items highlight common accessibility best practices."
    },
    "a11y-color-contrast": {
      "title": "Contrast",
      "description": "These are opportunities to improve the legibility of your content."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
      "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
      "description": "These are opportunities to improve keyboard navigation in your application."
    },
    "a11y-aria": {
      "title": "ARIA",
      "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
      "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "a11y-audio-video": {
      "title": "Audio and video",
      "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
      "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
      "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
    },
    "seo-content": {
      "title": "Content Best Practices",
      "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
      "description": "To appear in search results, crawlers need access to your app."
    },
    "best-practices-trust-safety": {
      "title": "Trust and Safety"
    },
    "best-practices-ux": {
      "title": "User Experience"
    },
    "best-practices-browser-compat": {
      "title": "Browser Compatibility"
    },
    "best-practices-general": {
      "title": "General"
    },
    "hidden": {
      "title": ""
    }
  },
  "stackPacks": [],
  "fullPageScreenshot": {
    "screenshot": {
      "data": "data:image/webp;base64,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",
      "width": 471.20001220703125,
      "height": 816
    },
    "nodes": {
      "1-0-HTML": {
        "id": "",
        "top": 0,
        "bottom": 816,
        "left": 0,
        "right": 471,
        "width": 471,
        "height": 816
      },
      "1-1-A": {
        "id": "",
        "top": 45,
        "bottom": 66,
        "left": 189,
        "right": 313,
        "width": 124,
        "height": 21
      },
      "1-2-A": {
        "id": "",
        "top": 45,
        "bottom": 66,
        "left": 315,
        "right": 426,
        "width": 112,
        "height": 21
      },
      "1-3-path": {
        "id": "",
        "top": 12,
        "bottom": 32,
        "left": 22,
        "right": 42,
        "width": 20,
        "height": 20
      },
      "1-4-BODY": {
        "id": "",
        "top": 0,
        "bottom": 816,
        "left": 0,
        "right": 471,
        "width": 471,
        "height": 816
      },
      "1-5-META": {
        "id": "",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": 0,
        "height": 0
      },
      "1-6-META": {
        "id": "",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": 0,
        "height": 0
      }
    }
  },
  "timing": {
    "entries": [
      {
        "startTime": 163,
        "name": "lh:config",
        "duration": 190.7,
        "entryType": "measure"
      },
      {
        "startTime": 164.2,
        "name": "lh:config:resolveArtifactsToDefns",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 353.9,
        "name": "lh:driver:connect",
        "duration": 16.2,
        "entryType": "measure"
      },
      {
        "startTime": 370.2,
        "name": "lh:runner:gather",
        "duration": 3000.4,
        "entryType": "measure"
      },
      {
        "startTime": 370.4,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 1003.2,
        "entryType": "measure"
      },
      {
        "startTime": 1373.6,
        "name": "lh:gather:getVersion",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 1376.7,
        "name": "lh:gather:getDevicePixelRatio",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 1379.1,
        "name": "lh:gather:getArtifact:Accessibility",
        "duration": 625.8,
        "entryType": "measure"
      },
      {
        "startTime": 2005,
        "name": "lh:gather:getArtifact:AnchorElements",
        "duration": 16.7,
        "entryType": "measure"
      },
      {
        "startTime": 2021.7,
        "name": "lh:gather:getArtifact:Doctype",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 2022.6,
        "name": "lh:gather:getArtifact:DOMStats",
        "duration": 5.2,
        "entryType": "measure"
      },
      {
        "startTime": 2027.8,
        "name": "lh:gather:getArtifact:FontSize",
        "duration": 5.9,
        "entryType": "measure"
      },
      {
        "startTime": 2033.7,
        "name": "lh:gather:getArtifact:Inputs",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 2035.2,
        "name": "lh:gather:getArtifact:ImageElements",
        "duration": 3.5,
        "entryType": "measure"
      },
      {
        "startTime": 2038.7,
        "name": "lh:gather:getArtifact:MetaElements",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 2040.6,
        "name": "lh:gather:getArtifact:RobotsTxt",
        "duration": 200.5,
        "entryType": "measure"
      },
      {
        "startTime": 2241.2,
        "name": "lh:gather:getArtifact:Stacks",
        "duration": 9.1,
        "entryType": "measure"
      },
      {
        "startTime": 2241.6,
        "name": "lh:gather:collectStacks",
        "duration": 8.7,
        "entryType": "measure"
      },
      {
        "startTime": 2250.3,
        "name": "lh:gather:getArtifact:ViewportDimensions",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 2251.9,
        "name": "lh:gather:getArtifact:FullPageScreenshot",
        "duration": 1115.2,
        "entryType": "measure"
      },
      {
        "startTime": 3370.8,
        "name": "lh:runner:audit",
        "duration": 165.5,
        "entryType": "measure"
      },
      {
        "startTime": 3370.9,
        "name": "lh:runner:auditing",
        "duration": 165.2,
        "entryType": "measure"
      },
      {
        "startTime": 3371.9,
        "name": "lh:audit:viewport",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 3372.3,
        "name": "lh:computed:ViewportMeta",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 3373.4,
        "name": "lh:audit:image-aspect-ratio",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 3377,
        "name": "lh:audit:image-size-responsive",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 3379.1,
        "name": "lh:audit:unsized-images",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 3381.2,
        "name": "lh:audit:accesskeys",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3382.4,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 3385.6,
        "name": "lh:audit:aria-allowed-role",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 3388.4,
        "name": "lh:audit:aria-command-name",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 3390.9,
        "name": "lh:audit:aria-conditional-attr",
        "duration": 4.3,
        "entryType": "measure"
      },
      {
        "startTime": 3395.3,
        "name": "lh:audit:aria-deprecated-role",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 3398,
        "name": "lh:audit:aria-dialog-name",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 3398.7,
        "name": "lh:audit:aria-hidden-body",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3400.9,
        "name": "lh:audit:aria-hidden-focus",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3403.1,
        "name": "lh:audit:aria-input-field-name",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 3403.9,
        "name": "lh:audit:aria-meter-name",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 3404.6,
        "name": "lh:audit:aria-progressbar-name",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 3405.4,
        "name": "lh:audit:aria-prohibited-attr",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 3408.2,
        "name": "lh:audit:aria-required-attr",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 3411.3,
        "name": "lh:audit:aria-required-children",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 3412.2,
        "name": "lh:audit:aria-required-parent",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 3413.1,
        "name": "lh:audit:aria-roles",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 3415.1,
        "name": "lh:audit:aria-text",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 3416,
        "name": "lh:audit:aria-toggle-field-name",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 3417,
        "name": "lh:audit:aria-tooltip-name",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 3417.9,
        "name": "lh:audit:aria-treeitem-name",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 3418.9,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3421.2,
        "name": "lh:audit:aria-valid-attr",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 3423.4,
        "name": "lh:audit:button-name",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 3424.8,
        "name": "lh:audit:bypass",
        "duration": 3,
        "entryType": "measure"
      },
      {
        "startTime": 3428,
        "name": "lh:audit:color-contrast",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3430.2,
        "name": "lh:audit:definition-list",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3431.3,
        "name": "lh:audit:dlitem",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3432.4,
        "name": "lh:audit:document-title",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 3434.6,
        "name": "lh:audit:duplicate-id-aria",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 3436.9,
        "name": "lh:audit:empty-heading",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 3438.1,
        "name": "lh:audit:form-field-multiple-labels",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3439.2,
        "name": "lh:audit:frame-title",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 3441.7,
        "name": "lh:audit:heading-order",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 3443.4,
        "name": "lh:audit:html-has-lang",
        "duration": 9.5,
        "entryType": "measure"
      },
      {
        "startTime": 3453.1,
        "name": "lh:audit:html-lang-valid",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 3454.4,
        "name": "lh:audit:html-xml-lang-mismatch",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 3455.8,
        "name": "lh:audit:identical-links-same-purpose",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 3458.5,
        "name": "lh:audit:image-alt",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 3461,
        "name": "lh:audit:image-redundant-alt",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 3462.6,
        "name": "lh:audit:input-button-name",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 3464.1,
        "name": "lh:audit:input-image-alt",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 3465.5,
        "name": "lh:audit:label-content-name-mismatch",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 3466.9,
        "name": "lh:audit:label",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 3468.5,
        "name": "lh:audit:landmark-one-main",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 3470.6,
        "name": "lh:audit:link-name",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3472.8,
        "name": "lh:audit:link-in-text-block",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 3474.4,
        "name": "lh:audit:list",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 3477.3,
        "name": "lh:audit:listitem",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 3479.3,
        "name": "lh:audit:meta-refresh",
        "duration": 10.1,
        "entryType": "measure"
      },
      {
        "startTime": 3489.5,
        "name": "lh:audit:meta-viewport",
        "duration": 4.2,
        "entryType": "measure"
      },
      {
        "startTime": 3493.8,
        "name": "lh:audit:object-alt",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3496,
        "name": "lh:audit:select-name",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 3497.9,
        "name": "lh:audit:skip-link",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 3499.8,
        "name": "lh:audit:tabindex",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3502,
        "name": "lh:audit:table-duplicate-name",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 3504.3,
        "name": "lh:audit:table-fake-caption",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 3506.4,
        "name": "lh:audit:target-size",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 3510.8,
        "name": "lh:audit:td-has-header",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 3513.3,
        "name": "lh:audit:td-headers-attr",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 3516,
        "name": "lh:audit:th-has-data-cells",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 3518.1,
        "name": "lh:audit:valid-lang",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 3520,
        "name": "lh:audit:video-caption",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 3521.8,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 3521.9,
        "name": "lh:audit:custom-controls-roles",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3521.9,
        "name": "lh:audit:focus-traps",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3521.9,
        "name": "lh:audit:focusable-controls",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3521.9,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3521.9,
        "name": "lh:audit:logical-tab-order",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3521.9,
        "name": "lh:audit:managed-focus",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3522,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3522.1,
        "name": "lh:audit:use-landmarks",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3522.1,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 3522.2,
        "name": "lh:audit:uses-responsive-images-snapshot",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 3523,
        "name": "lh:audit:doctype",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 3523.6,
        "name": "lh:audit:dom-size",
        "duration": 4.5,
        "entryType": "measure"
      },
      {
        "startTime": 3528.1,
        "name": "lh:audit:js-libraries",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 3529.3,
        "name": "lh:audit:paste-preventing-inputs",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 3530.3,
        "name": "lh:audit:meta-description",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 3531.2,
        "name": "lh:audit:font-size",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 3532.3,
        "name": "lh:audit:link-text",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 3533.5,
        "name": "lh:audit:crawlable-anchors",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 3534.5,
        "name": "lh:audit:robots-txt",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 3535.5,
        "name": "lh:audit:structured-data",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 3536.1,
        "name": "lh:runner:generate",
        "duration": 0.2,
        "entryType": "measure"
      }
    ],
    "total": 3165.9
  },
  "i18n": {
    "rendererFormattedStrings": {},
    "icuMessagePaths": {
      "core/audits/viewport.js | title": [
        "audits.viewport.title"
      ],
      "core/audits/viewport.js | description": [
        "audits.viewport.description"
      ],
      "core/audits/image-aspect-ratio.js | title": [
        "audits[image-aspect-ratio].title"
      ],
      "core/audits/image-aspect-ratio.js | description": [
        "audits[image-aspect-ratio].description"
      ],
      "core/lib/i18n/i18n.js | columnURL": [
        "audits[image-aspect-ratio].details.headings[1].label",
        "audits[image-size-responsive].details.headings[1].label",
        "audits[unsized-images].details.headings[1].label",
        "audits[uses-responsive-images-snapshot].details.headings[1].label"
      ],
      "core/audits/image-aspect-ratio.js | columnDisplayed": [
        "audits[image-aspect-ratio].details.headings[2].label"
      ],
      "core/audits/image-aspect-ratio.js | columnActual": [
        "audits[image-aspect-ratio].details.headings[3].label"
      ],
      "core/audits/image-size-responsive.js | title": [
        "audits[image-size-responsive].title"
      ],
      "core/audits/image-size-responsive.js | description": [
        "audits[image-size-responsive].description"
      ],
      "core/audits/image-size-responsive.js | columnDisplayed": [
        "audits[image-size-responsive].details.headings[2].label"
      ],
      "core/audits/image-size-responsive.js | columnActual": [
        "audits[image-size-responsive].details.headings[3].label"
      ],
      "core/audits/image-size-responsive.js | columnExpected": [
        "audits[image-size-responsive].details.headings[4].label"
      ],
      "core/audits/unsized-images.js | title": [
        "audits[unsized-images].title"
      ],
      "core/audits/unsized-images.js | description": [
        "audits[unsized-images].description"
      ],
      "core/audits/accessibility/accesskeys.js | title": [
        "audits.accesskeys.title"
      ],
      "core/audits/accessibility/accesskeys.js | description": [
        "audits.accesskeys.description"
      ],
      "core/audits/accessibility/aria-allowed-attr.js | title": [
        "audits[aria-allowed-attr].title"
      ],
      "core/audits/accessibility/aria-allowed-attr.js | description": [
        "audits[aria-allowed-attr].description"
      ],
      "core/lib/i18n/i18n.js | columnFailingElem": [
        "audits[aria-allowed-attr].details.headings[0].label",
        "audits[aria-allowed-role].details.headings[0].label",
        "audits[aria-command-name].details.headings[0].label",
        "audits[aria-conditional-attr].details.headings[0].label",
        "audits[aria-deprecated-role].details.headings[0].label",
        "audits[aria-hidden-body].details.headings[0].label",
        "audits[aria-hidden-focus].details.headings[0].label",
        "audits[aria-prohibited-attr].details.headings[0].label",
        "audits[aria-required-attr].details.headings[0].label",
        "audits[aria-roles].details.headings[0].label",
        "audits[aria-valid-attr-value].details.headings[0].label",
        "audits[aria-valid-attr].details.headings[0].label",
        "audits.bypass.details.headings[0].label",
        "audits[color-contrast].details.headings[0].label",
        "audits[document-title].details.headings[0].label",
        "audits[frame-title].details.headings[0].label",
        "audits[html-has-lang].details.headings[0].label",
        "audits[landmark-one-main].details.headings[0].label",
        "audits[link-name].details.headings[0].label",
        "audits[meta-viewport].details.headings[0].label",
        "audits.tabindex.details.headings[0].label",
        "audits[table-duplicate-name].details.headings[0].label",
        "audits[target-size].details.headings[0].label",
        "audits[td-headers-attr].details.headings[0].label",
        "audits[paste-preventing-inputs].details.headings[0].label"
      ],
      "core/audits/accessibility/aria-allowed-role.js | title": [
        "audits[aria-allowed-role].title"
      ],
      "core/audits/accessibility/aria-allowed-role.js | description": [
        "audits[aria-allowed-role].description"
      ],
      "core/audits/accessibility/aria-command-name.js | title": [
        "audits[aria-command-name].title"
      ],
      "core/audits/accessibility/aria-command-name.js | description": [
        "audits[aria-command-name].description"
      ],
      "core/audits/accessibility/aria-conditional-attr.js | title": [
        "audits[aria-conditional-attr].title"
      ],
      "core/audits/accessibility/aria-conditional-attr.js | description": [
        "audits[aria-conditional-attr].description"
      ],
      "core/audits/accessibility/aria-deprecated-role.js | title": [
        "audits[aria-deprecated-role].title"
      ],
      "core/audits/accessibility/aria-deprecated-role.js | description": [
        "audits[aria-deprecated-role].description"
      ],
      "core/audits/accessibility/aria-dialog-name.js | title": [
        "audits[aria-dialog-name].title"
      ],
      "core/audits/accessibility/aria-dialog-name.js | description": [
        "audits[aria-dialog-name].description"
      ],
      "core/audits/accessibility/aria-hidden-body.js | title": [
        "audits[aria-hidden-body].title"
      ],
      "core/audits/accessibility/aria-hidden-body.js | description": [
        "audits[aria-hidden-body].description"
      ],
      "core/audits/accessibility/aria-hidden-focus.js | title": [
        "audits[aria-hidden-focus].title"
      ],
      "core/audits/accessibility/aria-hidden-focus.js | description": [
        "audits[aria-hidden-focus].description"
      ],
      "core/audits/accessibility/aria-input-field-name.js | title": [
        "audits[aria-input-field-name].title"
      ],
      "core/audits/accessibility/aria-input-field-name.js | description": [
        "audits[aria-input-field-name].description"
      ],
      "core/audits/accessibility/aria-meter-name.js | title": [
        "audits[aria-meter-name].title"
      ],
      "core/audits/accessibility/aria-meter-name.js | description": [
        "audits[aria-meter-name].description"
      ],
      "core/audits/accessibility/aria-progressbar-name.js | title": [
        "audits[aria-progressbar-name].title"
      ],
      "core/audits/accessibility/aria-progressbar-name.js | description": [
        "audits[aria-progressbar-name].description"
      ],
      "core/audits/accessibility/aria-prohibited-attr.js | title": [
        "audits[aria-prohibited-attr].title"
      ],
      "core/audits/accessibility/aria-prohibited-attr.js | description": [
        "audits[aria-prohibited-attr].description"
      ],
      "core/audits/accessibility/aria-required-attr.js | title": [
        "audits[aria-required-attr].title"
      ],
      "core/audits/accessibility/aria-required-attr.js | description": [
        "audits[aria-required-attr].description"
      ],
      "core/audits/accessibility/aria-required-children.js | title": [
        "audits[aria-required-children].title"
      ],
      "core/audits/accessibility/aria-required-children.js | description": [
        "audits[aria-required-children].description"
      ],
      "core/audits/accessibility/aria-required-parent.js | title": [
        "audits[aria-required-parent].title"
      ],
      "core/audits/accessibility/aria-required-parent.js | description": [
        "audits[aria-required-parent].description"
      ],
      "core/audits/accessibility/aria-roles.js | title": [
        "audits[aria-roles].title"
      ],
      "core/audits/accessibility/aria-roles.js | description": [
        "audits[aria-roles].description"
      ],
      "core/audits/accessibility/aria-text.js | title": [
        "audits[aria-text].title"
      ],
      "core/audits/accessibility/aria-text.js | description": [
        "audits[aria-text].description"
      ],
      "core/audits/accessibility/aria-toggle-field-name.js | title": [
        "audits[aria-toggle-field-name].title"
      ],
      "core/audits/accessibility/aria-toggle-field-name.js | description": [
        "audits[aria-toggle-field-name].description"
      ],
      "core/audits/accessibility/aria-tooltip-name.js | title": [
        "audits[aria-tooltip-name].title"
      ],
      "core/audits/accessibility/aria-tooltip-name.js | description": [
        "audits[aria-tooltip-name].description"
      ],
      "core/audits/accessibility/aria-treeitem-name.js | title": [
        "audits[aria-treeitem-name].title"
      ],
      "core/audits/accessibility/aria-treeitem-name.js | description": [
        "audits[aria-treeitem-name].description"
      ],
      "core/audits/accessibility/aria-valid-attr-value.js | title": [
        "audits[aria-valid-attr-value].title"
      ],
      "core/audits/accessibility/aria-valid-attr-value.js | description": [
        "audits[aria-valid-attr-value].description"
      ],
      "core/audits/accessibility/aria-valid-attr.js | title": [
        "audits[aria-valid-attr].title"
      ],
      "core/audits/accessibility/aria-valid-attr.js | description": [
        "audits[aria-valid-attr].description"
      ],
      "core/audits/accessibility/button-name.js | title": [
        "audits[button-name].title"
      ],
      "core/audits/accessibility/button-name.js | description": [
        "audits[button-name].description"
      ],
      "core/audits/accessibility/bypass.js | title": [
        "audits.bypass.title"
      ],
      "core/audits/accessibility/bypass.js | description": [
        "audits.bypass.description"
      ],
      "core/audits/accessibility/color-contrast.js | title": [
        "audits[color-contrast].title"
      ],
      "core/audits/accessibility/color-contrast.js | description": [
        "audits[color-contrast].description"
      ],
      "core/audits/accessibility/definition-list.js | title": [
        "audits[definition-list].title"
      ],
      "core/audits/accessibility/definition-list.js | description": [
        "audits[definition-list].description"
      ],
      "core/audits/accessibility/dlitem.js | title": [
        "audits.dlitem.title"
      ],
      "core/audits/accessibility/dlitem.js | description": [
        "audits.dlitem.description"
      ],
      "core/audits/accessibility/document-title.js | title": [
        "audits[document-title].title"
      ],
      "core/audits/accessibility/document-title.js | description": [
        "audits[document-title].description"
      ],
      "core/audits/accessibility/duplicate-id-aria.js | title": [
        "audits[duplicate-id-aria].title"
      ],
      "core/audits/accessibility/duplicate-id-aria.js | description": [
        "audits[duplicate-id-aria].description"
      ],
      "core/audits/accessibility/empty-heading.js | title": [
        "audits[empty-heading].title"
      ],
      "core/audits/accessibility/empty-heading.js | description": [
        "audits[empty-heading].description"
      ],
      "core/audits/accessibility/form-field-multiple-labels.js | title": [
        "audits[form-field-multiple-labels].title"
      ],
      "core/audits/accessibility/form-field-multiple-labels.js | description": [
        "audits[form-field-multiple-labels].description"
      ],
      "core/audits/accessibility/frame-title.js | title": [
        "audits[frame-title].title"
      ],
      "core/audits/accessibility/frame-title.js | description": [
        "audits[frame-title].description"
      ],
      "core/audits/accessibility/heading-order.js | title": [
        "audits[heading-order].title"
      ],
      "core/audits/accessibility/heading-order.js | description": [
        "audits[heading-order].description"
      ],
      "core/audits/accessibility/html-has-lang.js | failureTitle": [
        "audits[html-has-lang].title"
      ],
      "core/audits/accessibility/html-has-lang.js | description": [
        "audits[html-has-lang].description"
      ],
      "core/audits/accessibility/html-lang-valid.js | title": [
        "audits[html-lang-valid].title"
      ],
      "core/audits/accessibility/html-lang-valid.js | description": [
        "audits[html-lang-valid].description"
      ],
      "core/audits/accessibility/html-xml-lang-mismatch.js | title": [
        "audits[html-xml-lang-mismatch].title"
      ],
      "core/audits/accessibility/html-xml-lang-mismatch.js | description": [
        "audits[html-xml-lang-mismatch].description"
      ],
      "core/audits/accessibility/identical-links-same-purpose.js | title": [
        "audits[identical-links-same-purpose].title"
      ],
      "core/audits/accessibility/identical-links-same-purpose.js | description": [
        "audits[identical-links-same-purpose].description"
      ],
      "core/audits/accessibility/image-alt.js | title": [
        "audits[image-alt].title"
      ],
      "core/audits/accessibility/image-alt.js | description": [
        "audits[image-alt].description"
      ],
      "core/audits/accessibility/image-redundant-alt.js | title": [
        "audits[image-redundant-alt].title"
      ],
      "core/audits/accessibility/image-redundant-alt.js | description": [
        "audits[image-redundant-alt].description"
      ],
      "core/audits/accessibility/input-button-name.js | title": [
        "audits[input-button-name].title"
      ],
      "core/audits/accessibility/input-button-name.js | description": [
        "audits[input-button-name].description"
      ],
      "core/audits/accessibility/input-image-alt.js | title": [
        "audits[input-image-alt].title"
      ],
      "core/audits/accessibility/input-image-alt.js | description": [
        "audits[input-image-alt].description"
      ],
      "core/audits/accessibility/label-content-name-mismatch.js | title": [
        "audits[label-content-name-mismatch].title"
      ],
      "core/audits/accessibility/label-content-name-mismatch.js | description": [
        "audits[label-content-name-mismatch].description"
      ],
      "core/audits/accessibility/label.js | title": [
        "audits.label.title"
      ],
      "core/audits/accessibility/label.js | description": [
        "audits.label.description"
      ],
      "core/audits/accessibility/landmark-one-main.js | title": [
        "audits[landmark-one-main].title"
      ],
      "core/audits/accessibility/landmark-one-main.js | description": [
        "audits[landmark-one-main].description"
      ],
      "core/audits/accessibility/link-name.js | title": [
        "audits[link-name].title"
      ],
      "core/audits/accessibility/link-name.js | description": [
        "audits[link-name].description"
      ],
      "core/audits/accessibility/link-in-text-block.js | title": [
        "audits[link-in-text-block].title"
      ],
      "core/audits/accessibility/link-in-text-block.js | description": [
        "audits[link-in-text-block].description"
      ],
      "core/audits/accessibility/list.js | title": [
        "audits.list.title"
      ],
      "core/audits/accessibility/list.js | description": [
        "audits.list.description"
      ],
      "core/audits/accessibility/listitem.js | title": [
        "audits.listitem.title"
      ],
      "core/audits/accessibility/listitem.js | description": [
        "audits.listitem.description"
      ],
      "core/audits/accessibility/meta-refresh.js | title": [
        "audits[meta-refresh].title"
      ],
      "core/audits/accessibility/meta-refresh.js | description": [
        "audits[meta-refresh].description"
      ],
      "core/audits/accessibility/meta-viewport.js | title": [
        "audits[meta-viewport].title"
      ],
      "core/audits/accessibility/meta-viewport.js | description": [
        "audits[meta-viewport].description"
      ],
      "core/audits/accessibility/object-alt.js | title": [
        "audits[object-alt].title"
      ],
      "core/audits/accessibility/object-alt.js | description": [
        "audits[object-alt].description"
      ],
      "core/audits/accessibility/select-name.js | title": [
        "audits[select-name].title"
      ],
      "core/audits/accessibility/select-name.js | description": [
        "audits[select-name].description"
      ],
      "core/audits/accessibility/skip-link.js | title": [
        "audits[skip-link].title"
      ],
      "core/audits/accessibility/skip-link.js | description": [
        "audits[skip-link].description"
      ],
      "core/audits/accessibility/tabindex.js | title": [
        "audits.tabindex.title"
      ],
      "core/audits/accessibility/tabindex.js | description": [
        "audits.tabindex.description"
      ],
      "core/audits/accessibility/table-duplicate-name.js | title": [
        "audits[table-duplicate-name].title"
      ],
      "core/audits/accessibility/table-duplicate-name.js | description": [
        "audits[table-duplicate-name].description"
      ],
      "core/audits/accessibility/table-fake-caption.js | title": [
        "audits[table-fake-caption].title"
      ],
      "core/audits/accessibility/table-fake-caption.js | description": [
        "audits[table-fake-caption].description"
      ],
      "core/audits/accessibility/target-size.js | title": [
        "audits[target-size].title"
      ],
      "core/audits/accessibility/target-size.js | description": [
        "audits[target-size].description"
      ],
      "core/audits/accessibility/td-has-header.js | title": [
        "audits[td-has-header].title"
      ],
      "core/audits/accessibility/td-has-header.js | description": [
        "audits[td-has-header].description"
      ],
      "core/audits/accessibility/td-headers-attr.js | title": [
        "audits[td-headers-attr].title"
      ],
      "core/audits/accessibility/td-headers-attr.js | description": [
        "audits[td-headers-attr].description"
      ],
      "core/audits/accessibility/th-has-data-cells.js | title": [
        "audits[th-has-data-cells].title"
      ],
      "core/audits/accessibility/th-has-data-cells.js | description": [
        "audits[th-has-data-cells].description"
      ],
      "core/audits/accessibility/valid-lang.js | title": [
        "audits[valid-lang].title"
      ],
      "core/audits/accessibility/valid-lang.js | description": [
        "audits[valid-lang].description"
      ],
      "core/audits/accessibility/video-caption.js | title": [
        "audits[video-caption].title"
      ],
      "core/audits/accessibility/video-caption.js | description": [
        "audits[video-caption].description"
      ],
      "core/audits/byte-efficiency/uses-responsive-images-snapshot.js | title": [
        "audits[uses-responsive-images-snapshot].title"
      ],
      "core/audits/byte-efficiency/uses-responsive-images.js | description": [
        "audits[uses-responsive-images-snapshot].description"
      ],
      "core/audits/byte-efficiency/uses-responsive-images-snapshot.js | columnDisplayedDimensions": [
        "audits[uses-responsive-images-snapshot].details.headings[2].label"
      ],
      "core/audits/byte-efficiency/uses-responsive-images-snapshot.js | columnActualDimensions": [
        "audits[uses-responsive-images-snapshot].details.headings[3].label"
      ],
      "core/audits/dobetterweb/doctype.js | title": [
        "audits.doctype.title"
      ],
      "core/audits/dobetterweb/doctype.js | description": [
        "audits.doctype.description"
      ],
      "core/audits/dobetterweb/dom-size.js | title": [
        "audits[dom-size].title"
      ],
      "core/audits/dobetterweb/dom-size.js | description": [
        "audits[dom-size].description"
      ],
      "core/audits/dobetterweb/dom-size.js | displayValue": [
        {
          "values": {
            "itemCount": 21
          },
          "path": "audits[dom-size].displayValue"
        }
      ],
      "core/audits/dobetterweb/dom-size.js | columnStatistic": [
        "audits[dom-size].details.headings[0].label"
      ],
      "core/lib/i18n/i18n.js | columnElement": [
        "audits[dom-size].details.headings[1].label"
      ],
      "core/audits/dobetterweb/dom-size.js | columnValue": [
        "audits[dom-size].details.headings[2].label"
      ],
      "core/audits/dobetterweb/dom-size.js | statisticDOMElements": [
        "audits[dom-size].details.items[0].statistic"
      ],
      "core/audits/dobetterweb/dom-size.js | statisticDOMDepth": [
        "audits[dom-size].details.items[1].statistic"
      ],
      "core/audits/dobetterweb/dom-size.js | statisticDOMWidth": [
        "audits[dom-size].details.items[2].statistic"
      ],
      "core/audits/dobetterweb/js-libraries.js | title": [
        "audits[js-libraries].title"
      ],
      "core/audits/dobetterweb/js-libraries.js | description": [
        "audits[js-libraries].description"
      ],
      "core/audits/dobetterweb/paste-preventing-inputs.js | title": [
        "audits[paste-preventing-inputs].title"
      ],
      "core/audits/dobetterweb/paste-preventing-inputs.js | description": [
        "audits[paste-preventing-inputs].description"
      ],
      "core/audits/seo/meta-description.js | failureTitle": [
        "audits[meta-description].title"
      ],
      "core/audits/seo/meta-description.js | description": [
        "audits[meta-description].description"
      ],
      "core/audits/seo/font-size.js | title": [
        "audits[font-size].title"
      ],
      "core/audits/seo/font-size.js | description": [
        "audits[font-size].description"
      ],
      "core/audits/seo/link-text.js | failureTitle": [
        "audits[link-text].title"
      ],
      "core/audits/seo/link-text.js | description": [
        "audits[link-text].description"
      ],
      "core/audits/seo/link-text.js | displayValue": [
        {
          "values": {
            "itemCount": 1
          },
          "path": "audits[link-text].displayValue"
        }
      ],
      "core/audits/seo/crawlable-anchors.js | title": [
        "audits[crawlable-anchors].title"
      ],
      "core/audits/seo/crawlable-anchors.js | description": [
        "audits[crawlable-anchors].description"
      ],
      "core/audits/seo/crawlable-anchors.js | columnFailingLink": [
        "audits[crawlable-anchors].details.headings[0].label"
      ],
      "core/audits/seo/robots-txt.js | title": [
        "audits[robots-txt].title"
      ],
      "core/audits/seo/robots-txt.js | description": [
        "audits[robots-txt].description"
      ],
      "core/audits/seo/manual/structured-data.js | title": [
        "audits[structured-data].title"
      ],
      "core/audits/seo/manual/structured-data.js | description": [
        "audits[structured-data].description"
      ],
      "core/config/default-config.js | performanceCategoryTitle": [
        "categories.performance.title"
      ],
      "core/config/default-config.js | a11yCategoryTitle": [
        "categories.accessibility.title"
      ],
      "core/config/default-config.js | a11yCategoryDescription": [
        "categories.accessibility.description"
      ],
      "core/config/default-config.js | a11yCategoryManualDescription": [
        "categories.accessibility.manualDescription"
      ],
      "core/config/default-config.js | bestPracticesCategoryTitle": [
        "categories[best-practices].title"
      ],
      "core/config/default-config.js | seoCategoryTitle": [
        "categories.seo.title"
      ],
      "core/config/default-config.js | seoCategoryDescription": [
        "categories.seo.description"
      ],
      "core/config/default-config.js | seoCategoryManualDescription": [
        "categories.seo.manualDescription"
      ],
      "core/config/default-config.js | metricGroupTitle": [
        "categoryGroups.metrics.title"
      ],
      "core/config/default-config.js | insightsGroupTitle": [
        "categoryGroups.insights.title"
      ],
      "core/config/default-config.js | insightsGroupDescription": [
        "categoryGroups.insights.description"
      ],
      "core/config/default-config.js | diagnosticsGroupTitle": [
        "categoryGroups.diagnostics.title"
      ],
      "core/config/default-config.js | diagnosticsGroupDescription": [
        "categoryGroups.diagnostics.description"
      ],
      "core/config/default-config.js | a11yBestPracticesGroupTitle": [
        "categoryGroups[a11y-best-practices].title"
      ],
      "core/config/default-config.js | a11yBestPracticesGroupDescription": [
        "categoryGroups[a11y-best-practices].description"
      ],
      "core/config/default-config.js | a11yColorContrastGroupTitle": [
        "categoryGroups[a11y-color-contrast].title"
      ],
      "core/config/default-config.js | a11yColorContrastGroupDescription": [
        "categoryGroups[a11y-color-contrast].description"
      ],
      "core/config/default-config.js | a11yNamesLabelsGroupTitle": [
        "categoryGroups[a11y-names-labels].title"
      ],
      "core/config/default-config.js | a11yNamesLabelsGroupDescription": [
        "categoryGroups[a11y-names-labels].description"
      ],
      "core/config/default-config.js | a11yNavigationGroupTitle": [
        "categoryGroups[a11y-navigation].title"
      ],
      "core/config/default-config.js | a11yNavigationGroupDescription": [
        "categoryGroups[a11y-navigation].description"
      ],
      "core/config/default-config.js | a11yAriaGroupTitle": [
        "categoryGroups[a11y-aria].title"
      ],
      "core/config/default-config.js | a11yAriaGroupDescription": [
        "categoryGroups[a11y-aria].description"
      ],
      "core/config/default-config.js | a11yLanguageGroupTitle": [
        "categoryGroups[a11y-language].title"
      ],
      "core/config/default-config.js | a11yLanguageGroupDescription": [
        "categoryGroups[a11y-language].description"
      ],
      "core/config/default-config.js | a11yAudioVideoGroupTitle": [
        "categoryGroups[a11y-audio-video].title"
      ],
      "core/config/default-config.js | a11yAudioVideoGroupDescription": [
        "categoryGroups[a11y-audio-video].description"
      ],
      "core/config/default-config.js | a11yTablesListsVideoGroupTitle": [
        "categoryGroups[a11y-tables-lists].title"
      ],
      "core/config/default-config.js | a11yTablesListsVideoGroupDescription": [
        "categoryGroups[a11y-tables-lists].description"
      ],
      "core/config/default-config.js | seoMobileGroupTitle": [
        "categoryGroups[seo-mobile].title"
      ],
      "core/config/default-config.js | seoMobileGroupDescription": [
        "categoryGroups[seo-mobile].description"
      ],
      "core/config/default-config.js | seoContentGroupTitle": [
        "categoryGroups[seo-content].title"
      ],
      "core/config/default-config.js | seoContentGroupDescription": [
        "categoryGroups[seo-content].description"
      ],
      "core/config/default-config.js | seoCrawlingGroupTitle": [
        "categoryGroups[seo-crawl].title"
      ],
      "core/config/default-config.js | seoCrawlingGroupDescription": [
        "categoryGroups[seo-crawl].description"
      ],
      "core/config/default-config.js | bestPracticesTrustSafetyGroupTitle": [
        "categoryGroups[best-practices-trust-safety].title"
      ],
      "core/config/default-config.js | bestPracticesUXGroupTitle": [
        "categoryGroups[best-practices-ux].title"
      ],
      "core/config/default-config.js | bestPracticesBrowserCompatGroupTitle": [
        "categoryGroups[best-practices-browser-compat].title"
      ],
      "core/config/default-config.js | bestPracticesGeneralGroupTitle": [
        "categoryGroups[best-practices-general].title"
      ]
    }
  }
}