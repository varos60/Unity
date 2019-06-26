using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class VJHandler : MonoBehaviour, IDragHandler, IPointerUpHandler, IPointerDownHandler
{
    private Image jsContainer;
    private Image joystick;

    public Vector3 InputDirection;
    public bool press;

    // Start is called before the first frame update
    void Awake()
    {
        jsContainer = GetComponent<Image>();
        joystick = transform.GetChild(0).GetComponent<Image>();
        InputDirection = Vector3.zero;
        press = false;
    }

    public void OnDrag(PointerEventData ped)
    {
        Vector2 position;        
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(jsContainer.rectTransform, ped.position, ped.pressEventCamera, out position))
        {            
            position.x = (position.x / jsContainer.rectTransform.sizeDelta.x);
            position.y = (position.y / jsContainer.rectTransform.sizeDelta.y);

            

            InputDirection = new Vector3(position.x * 2 + 1, position.y * 2 - 1, 0);
            InputDirection = (InputDirection.magnitude > 1) ? InputDirection.normalized : InputDirection;

            joystick.rectTransform.anchoredPosition = new Vector3(InputDirection.x * (jsContainer.rectTransform.sizeDelta.x / 3),
                                                                               InputDirection.y * (jsContainer.rectTransform.sizeDelta.y) / 3);
        }
    }

    public void OnPointerDown(PointerEventData ped)
    {
        press = true;
        OnDrag(ped);        
    }

    public void OnPointerUp(PointerEventData ped)
    {
        InputDirection = Vector3.zero;
        joystick.rectTransform.anchoredPosition = Vector3.zero;
        press = false;
    }
}
