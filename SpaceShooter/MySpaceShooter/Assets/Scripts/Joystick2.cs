using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Joystick2 : MonoBehaviour, IPointerUpHandler, IPointerDownHandler
{
    private Color default_color;
    private Image img;
    [HideInInspector]
    public bool fire;
    // Start is called before the first frame update
    void Start()
    {
        img = gameObject.GetComponent<Image>();
        default_color = img.color;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        fire = true;
        img.color = new Color(0.65f, 0.65f, 0.65f, 1f);        
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        fire = false;
        img.color = default_color;        
    }
}
