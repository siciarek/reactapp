Co jest fajnego
---------------


create-react-app
================

Css postprocesor zamienia

.. code-block:: javascript

    pre.song {
        padding: 0 16px;
        font-family: 'Roboto', sans-serif;
        line-height: 150%;
        white-space: pre-wrap;       /* css-3 */
    }


na

.. code-block:: javascript

    pre.song {
        padding: 0 16px;
        font-family: 'Roboto', sans-serif;
        line-height: 150%;
        white-space: pre-wrap;       /* css-3 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
    }
