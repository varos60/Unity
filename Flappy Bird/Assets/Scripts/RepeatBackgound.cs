using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RepeatBackgound : MonoBehaviour
{
    public BoxCollider2D groundBox;
    float ground_x;

    void Awake()
    {
        groundBox = GetComponentInChildren<BoxCollider2D>();
    }
    // Start is called before the first frame update
    void Start()
    {
        ground_x = groundBox.size.x;
    }

    // Update is called once per frame
    void Update()
    {
        if (transform.position.x < -ground_x)
        {
            RepositionBackground();
        }
    }

    void RepositionBackground()
    {
        transform.Translate(Vector2.right * ground_x * 2);
    }
}
